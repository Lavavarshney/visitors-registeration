# Use official Node.js image to build the app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app and build
COPY . .
RUN npm run build

# --- Production Stage ---
FROM node:18 AS production

# Set working directory
WORKDIR /app

# Copy only the dist folder and necessary files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies (if needed)
RUN npm install --production

# Expose the port vite preview uses
EXPOSE 3000

# Serve the built app using vite preview
CMD ["npx", "vite", "preview", "--host", "--port", "3000"]
