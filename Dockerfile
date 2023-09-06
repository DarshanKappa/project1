# FROM node:10-alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# COPY package*.json ./

# USER node

# RUN npm install

# COPY --chown=node:node . .

# EXPOSE 3000

# CMD [ "npm", "run", "dev" ]

# ------------------------------------------------------ NEXT-JS PROJECT ------------------------------------------------------

FROM node:19

# Create app directory
RUN adduser darshan

USER darshan

# WORKDIR /usr/src/app
WORKDIR /home/darshan/app

RUN chown -R darshan:darshan /home/darshan/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source

COPY --chown=darshan:darshan . .

RUN npm run build

EXPOSE 3000


CMD [ "npm", "run", "start" ]