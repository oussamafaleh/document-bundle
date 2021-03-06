<?php

namespace App\Request;

use ReflectionClass;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PropertyAccess\PropertyAccess;

class CommonParameterBag implements CommonParameterBagInterface
{

    /**
     * @param Request $request
     */
    public function populateFromRequest(Request $request)
    {
        $filteredKeys = $this->getFilteredKeys();
        $allowedTypes = array(
            static::PARAMETERS_TYPE_HEADERS,
            static::PARAMETERS_TYPE_QUERY,
            static::PARAMETERS_TYPE_REQUEST,
            static::PARAMETERS_TYPE_COOKIES,
            static::PARAMETERS_TYPE_FILES,
            static::PARAMETERS_TYPE_ATTRIBUTES,
        );

        $accessor = PropertyAccess::createPropertyAccessor();
        foreach ($this->getFilteredType() as $type) {
            if (in_array($type, $allowedTypes)) {
                $params = empty($filteredKeys) ?
                    $request->$type->all() :
                    array_intersect_key($request->$type->all(), array_flip($filteredKeys));

                if ($request->isMethod('POST') && !empty($request->getContent()) && json_decode($request->getContent()) !== null) {
                    $params = array_merge($params, json_decode($request->getContent(), true));
                }

                if ($type == static::PARAMETERS_TYPE_HEADERS) {
                    $params = array_map(function ($v) {
                        return is_array($v) ? implode(';', $v) : $v;
                    }, $params);
                }

                foreach ($params as $property => $value) {
                    $accessor->setValue($this, $property, $value);
                }
//                $this->add($params);
            }
        }
    }

    /**
     * override this methods to select only some parameters key.
     *
     * @return array
     */
    public function getFilteredKeys()
    {
        $attributes = [];
        $reflection = new ReflectionClass($this);
        $properties = $reflection->getProperties();
        foreach ($properties as $property) {
            $attributes[] = $property->getName();
        }

        return $attributes;
    }

    /**
     * override this method to customize which request parameters bags will be used.
     *
     * @return array
     */
    public function getFilteredType()
    {
        return array(
            static::PARAMETERS_TYPE_HEADERS,
            static::PARAMETERS_TYPE_QUERY,
            static::PARAMETERS_TYPE_REQUEST,
        );
    }

}
