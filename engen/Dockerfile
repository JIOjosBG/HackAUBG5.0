# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the source folder to the working directory
COPY src ./src

# Copy any other necessary files or folders to the working directory
COPY public ./public
COPY next.config.js .
COPY .babelrc .
COPY tailwind.config.js .
COPY postcss.config.js .

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
