<?php

require_once "bootstrap.php";

$newProductName = $argv[1];
$newProductDescription = $argv[2];
$newProductQuantity = $argv[3];
$newProductPrice = $argv[4];

$product = new Product();
$product->setName($newProductName);
$product->setDescription($newProductDescription);
$product->setQuantity($newProductQuantity);
$product->setPrice($newProductPrice);

$entityManager->persist($product);
$entityManager->flush();

echo "Created Product with ID " . $product->getId() . "\n";

