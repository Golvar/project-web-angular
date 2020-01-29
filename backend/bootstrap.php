<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
// date_default_timezone_set('America/Lima');

require_once 'vendor/autoload.php';

$isDevMode = true;
$proxyDir = null;
$cache = null;
$useSimpleAnnotationReader = false;
$config = Setup::createAnnotationMetadataConfiguration(array(__DIR__."/src"), $isDevMode, $proxyDir, $cache, $useSimpleAnnotationReader);
$conn = array(
    'driver' => 'pdo_sqlite',
    'path' => __DIR__ . '/db.sqlite',
);
$entityManager = EntityManager::create($conn, $config);