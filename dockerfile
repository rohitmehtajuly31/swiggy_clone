# Use Node.js image
FROM node:18-alpine AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for the development server
EXPOSE 5173

# Start the Vite development server with Nodemon
CMD ["npm", "run", "dev"]
