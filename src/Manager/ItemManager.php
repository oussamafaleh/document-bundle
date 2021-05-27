<?php

namespace App\Manager;



use App\Entity\User;
use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\UserItemProperty;
use App\Utils\MyTools;
use Doctrine\ORM\EntityManager;

use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Bundle\DoctrineBundle\Registry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\Form\Form;
use App\Form\ItemType;

use App\Form\DocumentEditType;
use App\Form\FolderEditType;

use Symfony\Component\Form\FormFactory;

use App\Repository\UserRepository;
use App\Repository\ItemRepository;

use Symfony\Component\DependencyInjection\ContainerInterface;


//use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

// use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class ItemManager extends AbstractManager
{

     /**
     * @var FormFactory
     */
    private $form;

    private $uploads_directory;
    public function __construct(EntityManager $entityManager, string $uploads_directory , FormFactory $formFactory)
    {
        parent::__construct($entityManager);
        $this->uploads_directory=$uploads_directory;
        $this->form  = $formFactory ;
        
    }


    public function init($settings = [])
    {
        parent::setSettings($settings);

        if ($this->getUserCode()) {

            // find existing User
            $this->user = $this->apiEntityManager
                ->getRepository(User::class)
                ->findOneBy(['code' => $this->getUserCode()]);

            if (!$this->user instanceof User) {
                throw new \Exception('UNKNOWN_USER');
            }
        }
        if ($this->getParentCode()) {

            // find existing Parent
            $this->parent = $this->apiEntityManager
                ->getRepository(Folder::class)
                ->findOneBy(['code' => $this->getParentCode()]);

            if (!$this->parent instanceof Folder) {
                throw new \Exception('UNKNOWN_PARENT');
            }
        }
        if ($this->getItemCode()) {

            // find existing Item
            $this->item = $this->apiEntityManager
                ->getRepository(Item::class)
                ->findOneBy(['code' => $this->getItemCode()]);

            if (!$this->item instanceof Item) {
                throw new \Exception('UNKNOWN_ITEM');
            }
        }

        return $this;
    }


    /**
     * @return string
     */
    public function getItemCode()
    {
        return $this->itemCode;
    }



    /**
     * @return string
     */
    public function getUserCode()
    {
        return $this->userCode;
    }


    /**
     * @return string
     */
    public function getParentCode()
    {
        return $this->parentCode;
    }

    /**
     * @param string $itemCode
     */
    public function setItemCode(string $itemCode)
    {
        $this->itemCode = $itemCode;
    }

    /**
     * @param string $userCode
     */
    public function setUserCode(string $userCode)
    {
        $this->userCode = $userCode;
    }

    /**
     * @param string $parentCode
     */
    public function setParentCode(string $parentCode)
    {
        $this->parentCode = $parentCode;
    }



 

          
    public function delete($item_code)
    {
        $publicResourcesFolderPath  = $this->uploads_directory;

          /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */
        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);
           
         if (!$item) {    
        return ' Error not found!';
        }        
         $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();   
        if($item ->getType()=="Document")
    
    {         
        $file_to_delete=$item->getCode();
        $path=$publicResourcesFolderPath.$file_to_delete;
        unlink($path);
        $this->apiEntityManager->remove($item);  
        $this->apiEntityManager->flush(); 
        $connection->commit();
       

        return "File Deleted Successfully!";
     
      
        
    }

        $this->apiEntityManager->remove($item);  
           $this->apiEntityManager->flush();
          $connection->commit();
           
           return 'Folder Deleted Successfully!';
}
     
     


public function generateLink($item_code)
{
      /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */

    $item = $this->apiEntityManager
    ->getRepository(Item::class)->findOneBy(['code' => $item_code]);
   
    if (!$item) {
        return ' Error not found!';
    } 
    $type=$item ->getType();
    if($type=="Folder"){
        $prefixe="http://localhost:8000/folder/list-sub-item/";
        $url=$prefixe.$item_code;
      
    }
    else {
        $url="pas encore";
    }
   // $prefixe="http://localhost:8000/folder/list-sub-item/";
        

    
      //  $url = 'Url_Bundle'.$type.'/'.$item_code. '/droitacces/sharing';

    
 

    
     return $url;
}



    public function shareByEmail($item_code,$email,$roles)
    {

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();

  /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */
        $item = $this->apiEntityManager
        ->getRepository(Item::class)->findOneBy(['code' => $item_code]);
        
        $user = $this->apiEntityManager
        ->getRepository(User::class)->findOneByEmail($email);
      /*
        $userItemProperty = $this->apiEntityManager
        ->getRepository(UserItemProperty::class)->findOneByRole($roles);
        dump( $userItemProperty );
        exit;

        */
      //  $userItemProperty = $this->apiEntityManager
      //  ->getRepository(UserItemProperty::class)->findOneByRole($roles);


        $userItemProperty = $this->apiEntityManager
        ->getRepository(UserItemProperty::class)->findOneBy(array(
            'item' =>  $item->getId(),
            'user' =>  $user->getId(),
            'roles' => $roles
          
        
        ));

       

        
        
        if(!empty($userItemProperty)){
            return "already shared";
        }
       
       
        $userItemProperty = new UserItemProperty();

        $userItemProperty->setItem($item)
        ->setUser($user)
        ->setIsTagged(false)
        ->setRoles($roles);
        $this->apiEntityManager->persist( $userItemProperty);
        $this->apiEntityManager->flush();

        $connection->commit();
        return ['data' => [
            'messages' => 'share_success',
           
        ]];

    }



    public function shareLink($item_code,$roles)
    {

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();

        /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */

        $item = $this->apiEntityManager
        ->getRepository(Item::class)->findOneBy(['code' => $item_code]);

        
      
        $userItemProperty = $this->apiEntityManager
        ->getRepository(UserItemProperty::class)->findOneBy(array(
            'item' =>  $item->getId(),
            'user' => null,
            'roles'=> $roles
        
        ));

        

        
        if(!empty($userItemProperty)){
            return "already shared";
        }
        
        $userItemProperty = new UserItemProperty();

        $userItemProperty->setItem($item)
        ->setUser(null)
        ->setIsTagged(false)
        ->setRoles($roles);
        $this->apiEntityManager->persist( $userItemProperty);
        $this->apiEntityManager->flush();

        $connection->commit();

        $prefixe="http://localhost:8000/folder/list-sub-item/";
        $link=$prefixe.$item_code;

      //  $sharedLink= generateLink($item_code);
        return ['data' => [
            'link' => $link,
           
        ]];

    }



    public function CancelShareLink($item_code)
    {

 /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */
        $item = $this->apiEntityManager
        ->getRepository(Item::class)->findOneBy(['code' => $item_code]);


        $userItemProperty = $this->apiEntityManager
        ->getRepository(UserItemProperty::class)->findOneBy(array(
            'item' =>  $item->getId(),
            'user' => null
        
        ));
          
        if(!empty($userItemProperty)){
            $this->apiEntityManager->remove($userItemProperty);  

            $this->apiEntityManager->flush();
            return "link removed";
        }
        else {
            return "Link not found";
          
           
        }
    }
       
      
       

        public function CancelSharePerEmail($item_code,$email)
        {
            $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);

            $user = $this->apiEntityManager
            ->getRepository(User::class)->findOneByEmail($email);
    
            $userItemProperty = $this->apiEntityManager
            ->getRepository(UserItemProperty::class)->findOneBy(array(
                'item' =>  $item->getId(),
                'user' => $user->getId()
            
            ));
              
            
            if(!empty($userItemProperty)){
                $this->apiEntityManager->remove($userItemProperty);  
    
                $this->apiEntityManager->flush();
                return "link removed";
            }
            else {
                return "Link not found";
              
               
            }
           
          
           
    
    
   


    
     

    }



    public function changePermission($item_code,$roles)
    {
        /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */
                $item = $this->apiEntityManager
                ->getRepository(Item::class)->findOneBy(['code' => $item_code]);
    
               
                $userItemProperty = $this->apiEntityManager
                ->getRepository(UserItemProperty::class)->findOneBy(array(
                    'item' =>  $item->getId(),
                    'user' => null
                
                ));

               

                $userItemProperty->setRoles($roles);
            
           
            $this->apiEntityManager->persist($userItemProperty);
    
            $this->apiEntityManager->flush();
            return ['data' => [
                'messages' => 'update_success',
            ]];
    
    }


    public function rename($item_code,$request){

        
       /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */
        $item = $this->apiEntityManager
        ->getRepository(Item::class)->findOneBy(['code' => $item_code]);

        if (empty($item)) {
            return ['data' => [
                'messages' => 'no item found',
                
                
            ]];
        }
 
      
         $form =$this->form->create(ItemType::class, $item);

         
     
        $form->submit($request->request->all(),false);
   
        
        if (!$form->isValid()) {
        $errors = [];
            foreach ($form->getErrors(true) as $error) {
                if ($error->getOrigin()) {
                    $errors[$error->getOrigin()->getName()][] = $error->getMessage();
                }
               
            }
            return $errors;
           
 
            
        }
   
     
       $content = $request->getContent();
       $params=json_decode($content,true);
       
        $item->setLabel($params['label']);
        
        $this->apiEntityManager->flush();
    
        return "success";
          
    



    }


  

}
