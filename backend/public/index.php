<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;


require '../vendor/autoload.php';


$app = new \Slim\App;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');


const JWT_SECRET = "maSuperClée";
$jwt = new \Slim\Middleware\JwtAuthentication([
    "path" => "/api",
    "secure" => false,
    "passthrough" => ["/api/users/login","/api/users/register"],
    "secret" => JWT_SECRET,
    "attribute" => "decoded_token_data",
    "algorithm" => ["HS256"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'AUTO');
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
]);

$app->add($jwt);

// GET
$app->get('/products', 'getProducts');
$app->get('/product/{id}', 'getProductById');
$app->get('/api/authen', 'authen');
$app->get('/api/users/get', 'getUserWhithToken');

// POST
$app->post('/api/users/login', 'login');
$app->post('/api/users/register', 'register');
$app->post('/api/users/update', 'updateCustomer');



/**
 * Retourne la liste de tous les produits
 */
function getProducts($resquest,$response,$args)
 {
    require_once "../bootstrap.php";
    $productRepository = $entityManager->getRepository('Product');
    $products = $productRepository->findAll();
    $json = array();
    foreach($products as $product) {
        array_push($json, $product->jsonSerialize());    
    }
    return $response->write(json_encode($json))
                    ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                    ->withHeader("Access-Control-Allow-Origin", "*")
                    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
}

/**
 * Retourne un produit spécifique en fonction de son ID
 */
function getProductById($request, $response, $args){
    require_once "../bootstrap.php";
    $productId = $args['id'];
    $product = $entityManager->find("Product", $productId);

    return $response->write(json_encode($product->jsonSerialize()))
                    ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                    ->withHeader("Access-Control-Allow-Origin", "*")
                    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
}

/**
 * Fonction pour la connexion d'un utilisateur
 * Retourne un token JWT (Bearer)
 */
function login (Request $request, Response $response, array $args)  {
    require_once "../bootstrap.php";
    $body = $request->getParsedBody();
    $login = $body['login'];
    $password = $body['password']; 

    $customerRepository = $entityManager->getRepository('Customer');
    $compte = $customerRepository->findOneBy(array('login' => $body['login'], 'password' => $body['password']));

    if($compte){
        $issuedAt = time();
        $expirationTime = $issuedAt + 6000; // jwt valid for 60 seconds from the issued time
        $payload = array(
        // id a stocker lors de l'utilisation de la bdd
        'login' => $login,
        'iat' => $issuedAt,
        'exp' => $expirationTime
        );
        
        $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
        $data = array("success" => "true", "token" => "{$token_jwt}");
    }else{
        $data = array("success" => "false");
    }
    

    return $response
                    ->withHeader("Content-Type", "application/json")
                    ->withJson($data);
}

/**
 * Fonction qui permet d'inscrire un client 
 */
function register($request, $response, $args){
    require_once "../bootstrap.php";
    $body = $request->getParsedBody();
    $customerRepository = $entityManager->getRepository('Customer');
    $compte = $customerRepository->count(array('login' => $body['login']));
    if($compte == 0){
        try{
            $customer = new Customer();
            $customer->setName($body['name']);
            $customer->setFirstName($body['firstname']); 
            $customer->setAdress($body['adress']); 
            $customer->setCp($body['cp']); 
            $customer->setVille($body['ville']); 
            $customer->setTel($body['tel']); 
            $customer->setCivilite($body['civilite']);
            $customer->setEmail($body['email']); 
            $customer->setLogin($body['login']); 
            $customer->setPassword($body['password']);
            
            $entityManager->persist($customer);
            $entityManager->flush();
            $data = array("success" => "true", "message" => "le client est ajouté avec succes", "id_customer" => "{$customer->getId()}");
    
            
        
        }catch(Exception $e){
            $data = $e->getmessage();
        }
    }else{
        $data = array("success" => "false", "message" => "Login est deja pris");
    }
    return $response->withHeader("Content-Type", "application/json")
                    ->withJson($data);

}


/**
 * Mettre à jour un client
 */
function updateCustomer($request, $response, $args){
    require_once "../bootstrap.php";
    $body = $request->getParsedBody();
    
    $customerRepository = $entityManager->getRepository('Customer');
    $compte = $customerRepository->findOneBy(array('login' => $body['login']));
    try{
        $compte->setName($body['name']);
        $compte->setFirstName($body['firstname']); 
        $compte->setAdress($body['adress']); 
        $compte->setCp($body['cp']); 
        $compte->setVille($body['ville']); 
        $compte->setTel($body['tel']); 
        $compte->setCivilite($body['civilite']);
        $compte->setEmail($body['email']);
        $compte->setPassword($body['password']);
        $entityManager->persist($compte);
        $entityManager->flush();


        $data = array("success" => "true", "message" => "le client est modifié avec succes", "id_customer" => "{$compte->getId()}");

    }catch(Exception $e){
        $data = $e->getmessage();
    }
    
    return $response->withHeader("Content-Type", "application/json")
                    ->withJson($data);
}

/**
 * Retourne un utilisateur en récupérant son token
 */
function getUserWhithToken($request, $response, $args){
    require_once "../bootstrap.php";
    //permet de trouver le token
    $token = $request->getAttribute("decoded_token_data");
    $customerRepository = $entityManager->getRepository('Customer');
    $compte = $customerRepository->findOneBy(array('login' => $token->login));
    return $response->withHeader("Content-Type", "application/json")->withJson($compte->jsonSerialize());
}


/**
 * 
 */
function authen($request, $response, $args) {
    $token = $request->getAttribute("decoded_token_data");
    return $response->withHeader("Content-Type", "application/json")->withJson($token);
    }

// Run app
$app->run();
