#this is a multi stage dockerfile

# Specify the Node.js version as a build argument
ARG NODE_VERSION=18.20.2

# Base stage
FROM node:${NODE_VERSION}-alpine AS base
# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

# Install dependencies with caching
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.yarn \
    yarn install --production --frozen-lockfile

# Copy the rest of the source files into the image.
COPY . .

# Development stage
FROM base AS dev
ENV NODE_ENV=development
RUN --mount=type=cache,target=/root/.yarn \
    yarn install --frozen-lockfile
EXPOSE 5000
CMD ["yarn", "run", "dev"]

# Production stage
FROM base AS production
ENV NODE_ENV=production
USER node
EXPOSE 5000
CMD ["yarn", "start"]
