# Use an official Node.js runtime as a base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build the app for production
RUN npm run build

# Expose port (if app runs on 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
