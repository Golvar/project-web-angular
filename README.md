# Projet Angular

Pour utiliser ce projet vous devez avoir un serveur web contenant *PHP*  
Composer doit être installer sur votre machine pour pouvoir lancer la commande `composer install`

Si la base de données n'est pas remplis et qu'aucun produit n'apparait il se peut que celle-ci ne soit pas crée, pour la créer il faudrat utiliser la commande suivant :  
`vendor/bin/doctrine orm:schema-tool:update --dump-sql --force`

Si celle-ci est crée vous pouvez alors utiliser la commande suivante depuis le dossier *backend*, celle-ci permet de remplir la base de données avec des produits :  
`php create_product.php`  
