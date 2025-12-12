## Sommaire

1. [Présentation](#présentation)
2. [Technologies et outils](#technologies-et-outils)
3. [Déploiement Docker](#déploiement)
   - [Pré-requis](#pré-requis)
   - [Lancer en local](#lancer-en-local)
   - [Important](#important)
   - [Localhost](#localhost)
4. [Déploiement VPS](#déploiement-vps)
5. [Site](#site-web)
6. [Auteur](#auteur)
7. [Licence](#licence)

---

## Présentation

OWGuesser est un petit projet personnel qui a pour but de me permettre de m'améliorer.

---

## Technologies et outils

- **React** : Framework principal pour la construction de l’interface.
- **TailwindCSS** : Framework CSS utilitaire pour un design moderne et responsive.
- **React Router DOM** : Navigation entre les pages.
- **Docker** : Conteneur
- **Traefik** : Reverse proxy.
  
---

## Déploiement

### Pré-requis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- Un terminal (cmd, PowerShell, ou terminal intégré VS Code)

### Lancer en local

1. **Cloner le repo :**
   ```sh
   git clone https://github.com/yrieix-cisterne-nws/owguesser.git .
   cd owguesser
   ```

2. ### Important

   ```sh
   ports:
      - "8080:80"
   ```
Cette étape est très importante, le `ports: -"8080:80"` n'est pas présent dans `docker-compose.yml` de base pour des raisons de sécurité sur le VPS, il faut donc ajouter cette ligne juste avant les labels. 

3. **Lancer le docker :**
 ```sh
 docker compose build
 ```
On peut rajouter à la commande un `-d` pour ne pas afficher les logs, ainsi que `--build` pour reconstruire l'image, ce qui donne : 
```sh
docker compose build -d --build
```

## Localhost

Le site devrait être visible sur 
`http://localhost:8080/`

---

## Déploiement VPS
Sur votre VPS, on vas utiliser Traefik (Un reverse proxy) pour faire marcher le site.
1. **Cloner le repo :** (faites bien attention à bien le mettre dans le bon fichier)
   ```sh
   git clone https://github.com/yrieix-cisterne-nws/owguesser.git .
   ```
2. **Créer le réseau :** (ou vérifier qu'il existe)
   ```sh
   docker network create traefik
   ```
3. **Mettre en ligne**
   ```sh
   docker compose up
   ```
On peut rajouter à la commande un `-d` pour ne pas afficher les logs, ainsi que `--build` pour reconstruire l'image, ce qui donne : 

   ```sh
   docker compose build -d --build
   ```

## Site web


- Mon portfolio est en ligne: [yrieix-cisterne.fr](https://yrieix-cisterne.fr)
- Le jeu en ligne : [owguesser](https://owguesser.yrieix-cisterne.fr)

---

## Auteur

**Yrieix Cisterne**  
Étudiant à la Normandie Web School 

- [LinkedIn](https://www.linkedin.com/in/yrieix-cisterne)
- [GitHub](https://github.com/yrieix-cisterne-nws)

---

## Licence

Projet réalisé dans le cadre de ma formation et enrichi régulièrement.  
Toute reproduction ou utilisation doit mentionner l’auteur.
