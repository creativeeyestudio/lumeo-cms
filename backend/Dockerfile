FROM node:22-alpine

# Répertoire interne du conteneur
WORKDIR /app

# Installation de PNPM global
RUN npm install -g pnpm

# Copier uniquement les fichiers nécessaires à l'installation
# ⚠️ Ton backend utilise PNPM → il faut pnpm-lock.yaml, PAS package-lock.json
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances
RUN pnpm install

# Copier le reste du projet backend
COPY . .

# Exposer le port Next.js / Payload
EXPOSE 3000

# Commande par défaut en développement
CMD ["pnpm", "dev"]