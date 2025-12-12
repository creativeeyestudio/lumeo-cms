FROM node:22-alpine

WORKDIR /app

# Installer PNPM
RUN npm install -g pnpm

# Copier les fichiers PNPM
COPY package.json pnpm-lock.yaml ./

# Installer deps
RUN pnpm install

# Copier le reste
COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
