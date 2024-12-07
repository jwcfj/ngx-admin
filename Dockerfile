# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
#RUN npm install
RUN npm install -g @angular/cli
# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 4200

# Command to run your application
CMD ["ng", "serve", "--host", "0.0.0.0"]