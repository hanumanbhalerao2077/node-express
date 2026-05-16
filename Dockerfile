# Production-ready Dockerfile
# Use lightweight Node Alpine image
FROM node:24-alpine

# Create app directory
WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json ./

RUN npm ci --only=production

# Copy source
COPY server.js ./
COPY src ./src
COPY views ./views

# Expose port
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health',res=>process.exit(res.statusCode===200?0:1)).on('error',()=>process.exit(1))"

ENV NODE_ENV=production

CMD ["node", "server.js"]


