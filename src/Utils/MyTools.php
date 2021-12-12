<?php

namespace App\Utils;

/**
 * MyTools: boite à outils
 *
 * @author Walid Saadaoui
 */
class MyTools
{

    public static function GUIDv4($trim = true)
    {
        // Windows
        if (function_exists('com_create_guid') === true) {
            if ($trim === true)
                return trim(com_create_guid(), '{}');
            else
                return com_create_guid();
        }

        // OSX/Linux
        if (function_exists('openssl_random_pseudo_bytes') === true) {
            $data = openssl_random_pseudo_bytes(16);
            $data[6] = chr(ord($data[6]) & 0x0f | 0x40);    // set version to 0100
            $data[8] = chr(ord($data[8]) & 0x3f | 0x80);    // set bits 6-7 to 10
            return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
        }

        // Fallback (PHP 4.2+)
        mt_srand((double)microtime() * 10000);
        $charid = strtolower(md5(uniqid(rand(), true)));
        $hyphen = chr(45);                  // "-"
        $lbrace = $trim ? "" : chr(123);    // "{"
        $rbrace = $trim ? "" : chr(125);    // "}"
        $guidv4 = $lbrace .
            substr($charid, 0, 8) . $hyphen .
            substr($charid, 8, 4) . $hyphen .
            substr($charid, 12, 4) . $hyphen .
            substr($charid, 16, 4) . $hyphen .
            substr($charid, 20, 12) .
            $rbrace;
        return $guidv4;
    }

    /**
     * Pagination pour angualr
     *
     * @param array $list
     * @param integer $index
     * @param integer $size
     * @param integer $total
     * @return array
     */
    public static function paginator($list, $index = 1, $size = 10, $total = null)
    {
        if (!$total) {
            $total = MyTools::getValueFromResultSet($list, 'total', 0);
        }


        $list = array_map(function (&$element) {
            if (isset($element['total'])) {
                unset($element['total']);
            }
            return $element;
        }, $list);
        $total_indexs = intval($total / intval($size));
        if ($total % intval($size) > 0) {
            $total_indexs++;
        }
        return [
            'Result' => 'OK',
            'total' => $total ? intval($total) : 0,
            'total_indexs' => $total_indexs,
            'index' => intval($index),
            'size' => intval($size),
            'rowCount' => count($list),
            'rows' => $list,
        ];
    }

    public static function getValueFromResultSet($aResultSet, $sColumn, $default = null)
    {
        foreach ($aResultSet as $result) {
            if (isset($result[$sColumn])) {
                return $result[$sColumn];
            }
        }
        return $default;
    }

    public static function getOption(&$options, $option, $default = null, $unset = true)
    {
        $value = $default;
        if (array_key_exists($option, $options)) {

            $value = $options[$option];
            if (!is_array($value)) {
                $value = trim($value);
            }
            if ((is_array($value) && !count($value)) || (!is_array($value) && strlen($value) == 0)) {
                $value = $default;
            }

            if ($unset) {
                unset($options[$option]);
            }
        }

        return $value;
    }
//    public static function getTrakingCode($prefix = null)
//    {
//        $microTime = explode('.', microtime(true));
//        return ($prefix . $microTime[1] . mt_rand(100, 999) . 'TN');
//    }
//
//    public static function arrayRemap(array $data, array $mapping)
//    {
//        foreach ($mapping as $oldRow => $newRow) {
//            if (!array_key_exists($newRow, $data)) {
//                $data[$newRow] = null;
//            }
//
//            if (array_key_exists($oldRow, $data) && $oldRow != $newRow) {
//                $data[$newRow] = $data[$oldRow];
//                unset($data[$oldRow]);
//            }
//        }
//        return $data;
//    }
//
//    public static function getDateLastYear($date, $format = 'Y-m-d')
//    {
//        $date = new \DateTime($date);
//        $date->modify('-1 year');
//        return $date->format($format);
//    }
//
//    public static function formatNumber($number, $decimals = 4)
//    {
//        return number_format($number, $decimals, '.', '');
//    }
//
//    /**
//     * complete an integer with 0s to have a string of $max characters
//     *
//     * @param integer $id
//     * @param integer $max
//     * @return string
//     */
//    public static function getSequence($id, $max = 5)
//    {
//        $idTmp = '9';
//        while (strlen($idTmp) < $max) {
//            $idTmp = '9' . $idTmp;
//        }
//
//        if (intval($id) > intval($idTmp)) {
//            $id = '1';
//        }
//
//        while (strlen($id) < $max) {
//            $id = '0' . $id;
//        }
//
//        return $id;
//    }
//
//    public static function countDaysBetweenDates($dateBegin, $dateEnd = null, $dateEndStrict = false)
//    {
//        $datetime1 = new \DateTime($dateBegin);
//        $datetime2 = new \DateTime($dateEnd);
//        return $datetime2->diff($datetime1)->format('%a') + ($dateEndStrict ? 0 : 1);
//    }
//
//    public static function fixInterval($dateBegin, $dateEnd)
//    {
//        if (!$dateBegin instanceof \DateTime) {
//            $dateBegin = new \DateTime($dateBegin);
//        }
//
//        if (!$dateEnd instanceof \DateTime) {
//            $dateEnd = new \DateTime($dateEnd);
//        }
//
//        // if meter changes before 12 pm we fix date to d-1
//        if ($dateEnd->format('Y-m-d H:i:s') < $dateEnd->format('Y-m-d 12:00:00')) {
//            $dateEnd->modify('-1 day');
//            $dateEnd = new \DateTime($dateEnd->format('Y-m-d 23:59:59'));
//        }
//
//        $nextPeriod = clone $dateBegin;
//
//        $periods = [];
//
//        do {
//
//            $periodBegin = $nextPeriod->format('Y-m-d 00:00:00');
//
//            $periodEnd = $nextPeriod->format('Y-m-t 23:59:59');
//            $nextPeriod = new \DateTime($periodEnd);
//            $nextPeriod->modify('+1 second');
//            if ($nextPeriod > $dateEnd) {
//                $periodEnd = $dateEnd->format('Y-m-d 23:59:59');
//            }
//
//            $periods[] = [
//                'begin' => $periodBegin,
//                'end' => $periodEnd
//            ];
//        } while ($nextPeriod <= $dateEnd);
//
//        return $periods;
//    }
//
//    public static function getIntervalsBetweenDates($dateBegin, $dateEnd)
//    {
//        if (!$dateBegin instanceof \DateTime) {
//            $dateBegin = new \DateTime($dateBegin);
//        }
//
//        if (!$dateEnd instanceof \DateTime) {
//            $dateEnd = new \DateTime($dateEnd);
//        }
//
//        $nextPeriod = clone $dateBegin;
//
//        $periods = [];
//
//        do {
//
//            $periodBegin = $nextPeriod->format('Y-m-d 00:00:00');
//
////            if ($periodBegin < $nextPeriod->format('Y-m-d H:i:s')) {
////                $periodBegin = clone $nextPeriod;
////                $periodBegin->modify('+1 day');
////                $periodBegin = $periodBegin->format('Y-m-d 00:00:00');
////            }
//
//            $periodEnd = $nextPeriod->format('Y-m-t 23:59:59');
//            $nextPeriod = new \DateTime($periodEnd);
//            $nextPeriod->modify('+1 second');
//            if ($nextPeriod > $dateEnd) {
//                $periodEnd = $dateEnd->format('Y-m-d 23:59:59');
//            }
//
//            $periods[] = [
//                'begin' => $periodBegin,
//                'end' => $periodEnd
//            ];
//        } while ($nextPeriod <= $dateEnd);
//
//        return $periods;
//    }
//
//    public static function TransformToArray(&$aOptions)
//    {
//        if ($aOptions instanceof \stdClass) {
//            $aOptions = (array) $aOptions;
//        }
//
//        if (is_array($aOptions)) {
//            foreach ($aOptions as &$Options) {
//                self::TransformToArray($Options);
//            }
//        }
//    }
//
//    public static function trimArray($aArray)
//    {
//        if (!is_array($aArray)) {
//            $aArray = trim($aArray);
//        }
//        foreach ($aArray as $key => &$value) {
//
//            if (is_array($value)) {
//                $value = self::trimArray($value);
//            } else {
//                $value = trim($value);
//                if (!strlen($value)) {
//                    unset($aArray[$key]);
//                }
//            }
//        }
//        return $aArray;
//    }
//
//    public static function camelize($input, $lcfirst = true)
//    {
//
//        $result = str_replace(' ', '', ucwords(strtr($input, '_-', '  ')));
////        $result = '';
////        $words = explode('_', $input);
////        $wordCount = count($words);
////
////        for ($i = 0; $i < $wordCount; $i++) {
////
////            $result .= (!($i === 0) ? ucfirst($words[$i]) : strtolower($words[$i]));
////        }
//
//        return $lcfirst ? lcfirst($result) : $result;
//    }
//
//    public static function toSnake($input)
//    {
//        return strtolower(ltrim(preg_replace('/([A-Z])/', '_\\1', $input), '_'));
//    }
//
//    public static function hashPassword($value, $cost = 12)
//    {
//        return password_hash($value, PASSWORD_BCRYPT, ['cost' => $cost]);
//    }
//
//    public static function PasswordSha($value)
//    {
//        return hash('sha512', $value);
//    }
//

//
//    public static function pr($pValue, $pbExit = true)
//    {
//        dump($pValue);
////        echo '<pre>';
//        //        print_r($pValue);
//        //        echo '</pre>';
//        if ($pbExit) {
//            die();
//        }
//    }
//
//    public static function completeArray($aSrc, $aDest, $value = null)
//    {
//        foreach ($aSrc as $valueSrc) {
//            if (!isset($aDest[$valueSrc])) {
//                $aDest[$valueSrc] = $value;
//            }
//        }
//        return $aDest;
//    }
//
//    /**
//     * Parse un tableau pour le formater
//     *
//     * @param array $aResultSet
//     * @param array $aColumn
//     * @param sting $sColumnInKey
//     * @return array
//     * @author Walid Saadaoui 28/05/2013
//     */
//    public static function getArrayFromResultSetGroupBy($aResultSet, $sColumnInKey, $aColumn)
//    {
//        $aResult = array();
//
//        foreach ($aResultSet as $result) {
//            $key = $result[$sColumnInKey];
//            if (!isset($aResult[$key])) {
//                $aResult[$key] = array();
//            }
//
//            foreach ($aColumn as $keyColmun => $sColumn) {
//                if (is_array($sColumn)) {
//                    $aResult[$key][$result[$keyColmun]] = array();
//                    foreach ($sColumn as $column) {
//                        $aResult[$key][$result[$keyColmun]][$column] = $result[$column];
//                    }
//                } else {
//                    $aResult[$key][$sColumn] = $result[$sColumn];
//                }
//            }
//        }
//        return $aResult;
//    }
//
//    /**
//     * Parse un tableau pour le formater
//     *
//     * @param array $aResultSet
//     * @param array $aColumn
//     * @param sting $sColumnInKey
//     * @return array
//     * @author Walid Saadaoui 28/05/2013
//     */
//    public static function getArrayFromResultSet($aResultSet, $sColumnInKey, $aColumn = array())
//    {
//        $aResult = array();
//
//        foreach ($aResultSet as $result) {
//            $key = $result[$sColumnInKey];
//            if (!isset($aResult[$key])) {
//                $aResult[$key] = array();
//            }
//            foreach ($aColumn as $sColumn) {
//                $aResult[$key][$sColumn] = $result[$sColumn];
//            }
//        }
//        return $aResult;
//    }
//
//    /**
//     * Parse un tableau pour en extraire une colonne
//     *
//     * @param array $aResultSet
//     * @param sting $sColumn
//     * @param sting $sColumnInKey
//     * @return array
//     * @author Walid Saadaoui 28/05/2013
//     */
//    public static function getColumnFromResultSetGroupBy($aResultSet, $sColumn, $sColumnInKey)
//    {
//        $aResult = array();
//
//        foreach ($aResultSet as $result) {
//            if (isset($result[$sColumn])) {
//                if (!isset($aResult[$result[$sColumnInKey]])) {
//                    $aResult[$result[$sColumnInKey]] = array();
//                }
//                if (!in_array($result[$sColumn], $aResult[$result[$sColumnInKey]])) {
//                    $aResult[$result[$sColumnInKey]][] = $result[$sColumn];
//                }
//            }
//        }
//        return $aResult;
//    }
//
//    /**
//     * Parse un tableau pour en extraire une colonne
//     *
//     * @param array $aResultSet
//     * @param string $sColumn
//     * @param string $sColumnInKey
//     * @return array
//     * @author Walid Saadaoui 28/05/2013
//     */
//    public static function getColumnFromResultSet($aResultSet, $sColumn, $sColumnInKey = null)
//    {
//        $aResult = array();
//
//        foreach ($aResultSet as $result) {
//
//            if (isset($result[$sColumn])) {
//                if ($sColumnInKey && isset($result[$sColumnInKey])) {
//                    $aResult[$result[$sColumnInKey]] = $result[$sColumn];
//                } else {
//                    $aResult[] = $result[$sColumn];
//                }
//            }
//        }
//        return $aResult;
//    }
//
//    public static function getResultSetForSpecificValue($aResultSet, $sKeyWhen, $sValueWhen)
//    {
//        $aResult = array();
//
//        foreach ($aResultSet as $result) {
//
//            if (isset($result[$sKeyWhen]) && $result[$sKeyWhen] == $sValueWhen) {
//                $aResult[] = $result;
//            }
//        }
//        return $aResult;
//    }
//
//
//
//    public static function generateLitteCode($sPrefix = null)
//    {
//        return sprintf('%s%04X-%04X', uniqid($sPrefix), mt_rand(0, 16384), mt_rand(0, 65535));
//    }
//
//    public static function getBordereauCode($sPrefix = null)
//    {
//        $data = uniqid($sPrefix . '_' . bin2hex(mt_rand(1, 65535)));
//        return strtoupper(str_replace(array('+', '/', '='), array('', '', ''), $data));
//    }
//
//    public static function generateCode($sPrefix = null)
//    {
//        return sprintf('%s_%04X-%04X', uniqid(($sPrefix)), mt_rand(16384, 20479), mt_rand(0, 65535));
//    }
//
//    public static function getPublicKey($prefix = null)
//    {
//        $microTime = explode('.', microtime(true));
//        return ($prefix . $microTime[1] . mt_rand(10000, 99999));
//    }
//
//    public static function getStdPath($path)
//    {
//        $ds = DIRECTORY_SEPARATOR;
//
//        return str_replace(array('\\', '/'), array($ds, $ds), $path);
//    }
//
//    public static function getPassword($dPassLength = 8)
//    {
//        $sPasswd = "";
//        $sCharacters = "abcdefghjkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ023456789+@!$%?&";
//
//        for ($i = 1; $i <= $dPassLength; $i++) {
//            $randPosition = mt_rand(0, (strlen($sCharacters) - 1));
//            $sPasswd .= $sCharacters[$randPosition];
//        }
//
//        return $sPasswd;
//    }
//
//    public static function isArrayAssoc(array $arr)
//    {
//        if (array() === $arr) {
//            return false;
//        }
//
//        return array_keys($arr) !== range(0, count($arr) - 1);
//    }
//
//    /**
//     * Nettoyage d'un tableau
//     *
//     * @param type $data
//     * @return type
//     */
//    public static function cleanArray(&$data)
//    {
//        foreach ($data as $index => &$element) {
//            $element = trim($element);
//            if (empty($element)) {
//                unset($data[$index]);
//            }
//        }
//    }
//
//    /**
//     * Nettoyage d'un tableau
//     *
//     * @param type $data
//     * @return type
//     */
//    public static function clearArray($data)
//    {
//        for ($i = 0; $i <= count($data); $i++) {
//            $data[$i] = trim(str_replace('"', '', $data[$i]));
//            $data[$i] = trim(str_replace('\u00b0', '°', $data[$i]));
//            if (empty($data[$i]) || count($data) < 2) {
//                unset($data[$i]);
//                continue;
//            }
//            $data[$i] = preg_replace("/\xEF\xBB\xBF/", "", $data[$i]);
//        }
//
//        return array_merge($data);
//    }
//
//    /**
//     * Pagination pour jTable
//     *
//     * @param array $list
//     * @param integer $page
//     * @param integer $max_per_page
//     * @param integer $total
//     * @return array
//     */
//    public static function jtablePaginator($list, $page, $max_per_page, $total = null)
//    {
//        if (!count($list)) {
//            $total = 0;
//        }
//
//        if (is_null($total)) {
//            $total = MyTools::getValueFromResultSet($list, 'total', 0);
//        }
//
//        $list = array_map(function (&$element) {
//            if (isset($element['total'])) {
//                unset($element['total']);
//            }
//            return $element;
//        }, $list);
//
//        return [
//            'TotalRecordCount' => $total ? intval($total) : 0,
//            'Records' => $list,
//            'Result' => 'OK',
//            'current' => intval($page),
//            'max_per_page' => intval($max_per_page),
//        ];
//    }
//
//    /**
//     * Pagination pour Bootgrid
//     *
//     * @param array $list
//     * @param integer $page
//     * @param integer $max_per_page
//     * @param integer $total
//     * @return array
//     */
//    public static function jtablePaginatorRows($list, $page, $max_per_page, $total = null)
//    {
//        if (!$total) {
//            $total = MyTools::getValueFromResultSet($list, 'total', 0);
//        }
//
//        $list = array_map(function (&$element) {
//            if (isset($element['total'])) {
//                unset($element['total']);
//            }
//            return $element;
//        }, $list);
//
//        return [
//            'Result' => 'OK',
//            'total' => $total ? intval($total) : 0,
//            'current' => intval($page),
//            'max_per_page' => intval($max_per_page),
//            'rowCount' => count($list),
//            'rows' => $list,
//        ];
//    }


}
