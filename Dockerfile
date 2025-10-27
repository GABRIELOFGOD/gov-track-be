# Multi-stage Dockerfile (standard name: Dockerfile)
# Builder: installs all deps and builds the TypeScript output
# Runner: small production image with only prod deps

FROM node:20-alpine AS builder
WORKDIR /app

# Copy package manifests for cached installs
COPY package*.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install production dependencies only
COPY --from=builder /app/package*.json ./
RUN npm ci --production --silent --omit=dev

# Copy built output
COPY --from=builder /app/dist ./dist

USER node
EXPOSE 8000
CMD ["node", "dist/index.js"]
