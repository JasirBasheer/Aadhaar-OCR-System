FROM node:18-alpine AS builder
LABEL project="OCRSystem"
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM node:18-alpine AS production
LABEL project="OCRSystem"

RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs
EXPOSE 3005
CMD ["serve", "-s", "dist", "-l", "3005"]
