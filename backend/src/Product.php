<?php
// src/Product.php

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="products")
 */
class Product
{
    /** 
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    protected $id;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $name;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $description;
    /** 
     * @ORM\Column(type="integer") 
     */
    protected $quantity;
    /** 
     * @ORM\Column(type="integer") 
     */
    protected $price;

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getQuantity()
    {
        return $this->quantity;
    }

    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function jsonSerialize()
    {
        return 
        [
            'id'   => $this->getId(),
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'quantity' => $this->getQuantity(),
            'price' => $this->getPrice()
        ];
    }
}