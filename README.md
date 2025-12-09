## Sommaire

1. [Présentation](#présentation)
2. [Technologies et outils](#technologies-et-outils)
3. [Installation et configuration](#installation-et-configuration)
   - [Pré-requis](#pré-requis)
   - [Installation du projet](#installation-du-projet)
   - [Lancement en développement](#lancement-en-développement)
   - [Compilation pour la production](#compilation-pour-la-production)
5. [Déploiement](#déploiement)
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
  
---

## Installation et configuration

### Pré-requis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) (fourni avec Node.js)
- Un terminal (cmd, PowerShell, ou terminal intégré VS Code)

### Installation du projet

1. **Cloner le dépôt :**
   ```sh
   git clone https://github.com/yrieix-cisterne-nws/owguesser.git
   cd owguesser
   ```

2. **Installer les dépendances :**
   ```sh
   npm install
   ```

   Cela installera toutes les librairies nécessaires, dont :
   - react
   - react-dom
   - react-router-dom
   - tailwindcss
   - etc.

3. **Configurer Tailwind CSS (si besoin) :**
   - Le fichier `tailwind.config.js` est déjà prêt, mais vous pouvez l’adapter à vos besoins.

### Lancement en développement

```sh
npm start
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Compilation pour la production

```sh
npm run build
```
Les fichiers optimisés seront générés dans le dossier `build/`.

---

## Déploiement


Le site est en ligne : [yrieix-cisterne.fr](https://yrieix-cisterne.fr)

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
