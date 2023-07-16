# Use an official Node.js runtime as the base image
FROM node:14-alpine
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the React app
RUN npm run build

# Set the production environment variable
ENV NODE_ENV=production

# Expose a port (you can change it if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
