FROM oven/bun:1-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json bun.lock ./
# COPY packages/shared/package.json packages/shared/package.json

RUN bun install --frozen-lockfile
RUN bun install sharp

FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./
COPY . .

RUN bun run --filter business build

FROM base AS runner

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV="production"
ARG HOSTNAME
ENV HOSTNAME="0.0.0.0"
ARG PORT
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000

CMD ["bun", "server.js"]



