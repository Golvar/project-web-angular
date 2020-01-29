<?php

require_once "bootstrap.php";

$customerName = $argv[1];
$customerFirstName = $argv[2];
$customerAdress = $argv[3];
$customerCp = $argv[4];
$customerVille = $argv[5];
$customertel = $argv[6];
$customerEmail = $argv[7];
$customerCivilite = $argv[8];
$customerLogin = $argv[9];
$customerPassword = $argv[10];

$customer = new Customer();
$customer->setName($customerName);
$customer->setFirstName($customerFirstName);
$customer->setAdress($customerAdress);
$customer->setCp($customerCp);
$customer->setVille($customerVille);
$customer->setTel($customertel);
$customer->setEmail($customerEmail);
$customer->setCivilite($customerCivilite);
$customer->setLogin($customerLogin);
$customer->setPassword($customerPassword);

$entityManager->persist($customer);
$entityManager->flush();

echo "Created customer with ID " . $customer->getId() . "\n";