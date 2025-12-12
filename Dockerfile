# Multi-stage build (2 images Docker), la première image est la pour installer les dépendances et générer des fichiers de production
# la seconde image est optimisé car elle ne contient que nginx et les fichiers de production

# 1ère image pour construire l'application avec Node.js, qui est basé sur Alpine
FROM node:20-alpine AS builder
WORKDIR /app

# Copie des fichiers de configuration des dépendances (package.json et package-lock.json)
COPY package*.json ./
# Installation des dépendances listées dans package.json
RUN npm install

#Après avoir installer les dépendance, on profite du cache Docker pour copier le reste du code

# Copie du reste du des fichiers dans l'image
COPY . .
# Les fichiers sont mis dans le dossier "dist", le fichier "dist" est construit avec le "RUN npm run build"
RUN npm run build

# 2nd image qui est optimisé pour la production
FROM node:20-alpine
# Copie des fichiers générés par le builder (dans /app/dist) vers le dossier public de Nginx
RUN npm install -g serve
COPY --from=builder /app/dist ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]