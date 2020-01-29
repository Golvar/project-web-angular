<?php

require_once "bootstrap.php";

// $newProductName = $argv[1];
// $newProductDescription = $argv[2];
// $newProductQuantity = $argv[3];
// $newProductPrice = $argv[4];



$product = new Product();
$product->setName("Clavier");
$product->setDescription("Super clavier filaire");
$product->setQuantity("10");
$product->setPrice("99");

$product1 = new Product();
$product1->setName("Souris");
$product1->setDescription("Belle souris d'une grande marque");
$product1->setQuantity("15");
$product1->setPrice("59");

$product2 = new Product();
$product2->setName("Tapis de souris");
$product2->setDescription("Tapis de souris haut de gamme");
$product2->setQuantity("5");
$product2->setPrice("99");

$product3 = new Product();
$product3->setName("Ecran");
$product3->setDescription("Ecran full HD");
$product3->setQuantity("20");
$product3->setPrice("299");

$product4 = new Product();
$product4->setName("Clé USB");
$product4->setDescription("Clé USB de 64Go");
$product4->setQuantity("30");
$product4->setPrice("15");

$product5 = new Product();
$product5->setName("Disque Dur Externe");
$product5->setDescription("HDD de 1To");
$product5->setQuantity("10");
$product5->setPrice("89");

$entityManager->persist($product);
$entityManager->persist($product1);
$entityManager->persist($product2);
$entityManager->persist($product3);
$entityManager->persist($product4);
$entityManager->persist($product5);
$entityManager->flush();

echo "Les Produits on été ajouté en base\n";

