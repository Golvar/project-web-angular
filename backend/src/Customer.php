<?php

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="customers")
 */
class Customer
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
    protected $firstName;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $adress;
    /** 
     * @ORM\Column(type="integer") 
     */
    protected $cp;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $ville;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $tel;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $email;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $civilite;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $login;
    /** 
     * @ORM\Column(type="string") 
     */
    protected $password;


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

    public function getFirstName()
    {
        return $this->firstName;
    }

    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    public function getAdress()
    {
        return $this->adress;
    }

    public function setAdress($adress)
    {
        $this->adress = $adress;
    }

    public function getCp()
    {
        return $this->cp;
    }

    public function setCp($cp)
    {
        $this->cp = $cp;
    }

    public function getVille()
    {
        return $this->ville;
    }

    public function setVille($ville)
    {
        $this->ville = $ville;
    }

    public function getTel()
    {
        return $this->tel;
    }

    public function setTel($tel)
    {
        $this->tel = $tel;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }


    public function getCivilite()
    {
        return $this->civilite;
    }

    public function setCivilite($civilite)
    {
        $this->civilite = $civilite;
    }

    public function getLogin()
    {
        return $this->login;
    }

    public function setLogin($login)
    {
        $this->login = $login;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function jsonSerialize()
    {
        return 
        [
            'name' => $this->getName(),
            'firstName' => $this->getFirstName(),
            'adress' => $this->getAdress(),
            'cp' => $this->getCp(),
            'ville' => $this->getVille(),
            'tel' => $this->getTel(),
            'email' => $this->getEmail(),
            'civilite' => $this->getCivilite(),
            'login' => $this->getLogin()
        ];
    }
}