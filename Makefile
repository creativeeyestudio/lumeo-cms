# ─────────────────────────────────────────────────────────────
# LUMEO — Makefile racine
# Commandes de gestion des environnements Docker
# ─────────────────────────────────────────────────────────────

# Fichiers compose communs
COMPOSE_BASE = docker-compose.yml

# ───── Environnements ─────────────────────────────────────────
COMPOSE_DEV  = $(COMPOSE_BASE) -f docker-compose.dev.yml
COMPOSE_TEST = $(COMPOSE_BASE) -f docker-compose.test.yml
COMPOSE_PROD = $(COMPOSE_BASE) -f docker-compose.prod.yml

# ───── Commun ────────────────────────────────────────────────
.PHONY: up down build logs ps restart prune

up:
	@echo "Starting default (dev) environment..."
	docker compose -f $(COMPOSE_DEV) up --build

down:
	docker compose -f $(COMPOSE_DEV) down

build:
	docker compose -f $(COMPOSE_DEV) build

logs:
	docker compose logs -f

ps:
	docker compose ps

restart:
	docker compose restart

prune:
	@echo "Cleaning unused Docker resources..."
	docker system prune -af --volumes


# ───── Dev ────────────────────────────────────────────────────
.PHONY: dev dev-up dev-down dev-build dev-logs

dev: dev-up

dev-up:
	@echo "🚀 Starting DEV environment..."
	docker compose -f $(COMPOSE_DEV) up --build

dev-down:
	docker compose -f $(COMPOSE_DEV) down

dev-build:
	docker compose -f $(COMPOSE_DEV) build

dev-logs:
	docker compose -f $(COMPOSE_DEV) logs -f


# ───── Test ───────────────────────────────────────────────────
.PHONY: test test-up test-down test-build test-logs

test: test-up

test-up:
	@echo "🧪 Starting TEST environment..."
	docker compose -f $(COMPOSE_TEST) up --build --abort-on-container-exit

test-down:
	docker compose -f $(COMPOSE_TEST) down

test-build:
	docker compose -f $(COMPOSE_TEST) build

test-logs:
	docker compose -f $(COMPOSE_TEST) logs -f


# ───── Prod ────────────────────────────────────────────────────
.PHONY: prod prod-up prod-down prod-build prod-logs

prod: prod-up

prod-up:
	@echo "🏭 Starting PRODUCTION environment..."
	docker compose -f $(COMPOSE_PROD) up --build -d

prod-down:
	docker compose -f $(COMPOSE_PROD) down

prod-build:
	docker compose -f $(COMPOSE_PROD) build

prod-logs:
	docker compose -f $(COMPOSE_PROD) logs -f


# ───── Utilitaires ─────────────────────────────────────────────
.PHONY: clean-full rebuild-all db-shell

clean-full:
	@echo "🔥 Deleting ALL containers, images & volumes..."
	docker compose -f $(COMPOSE_DEV) down -v
	docker system prune -af --volumes

rebuild-all:
	@echo "♻️ Rebuilding all environments (DEV/TEST/PROD)..."
	docker compose -f $(COMPOSE_DEV) build
	docker compose -f $(COMPOSE_TEST) build
	docker compose -f $(COMPOSE_PROD) build

db-shell:
	@echo "🐘 Opening Postgres shell..."
	docker exec -it lumeo-db psql -U lumeo -d lumeo
