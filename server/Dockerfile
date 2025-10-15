FROM node:18-alpine AS builder
LABEL project="OCRSystem"
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .


FROM node:18-alpine AS production
LABEL project="OCRSystem"
RUN npm install -g ts-node typescript
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app
USER nodejs
EXPOSE 5005
CMD ["npm", "start"]
