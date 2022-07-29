FROM node:16.15.1 as base

# Add package file
COPY package.json ./
COPY package-lock.json ./

# Install deps
RUN npm install

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Build dist
RUN npm install -g typescript
RUN tsc

# Start production image build
FROM gcr.io/distroless/nodejs:16

# Copy node modules and build directory
COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist
COPY private.key ./
COPY public.key ./

# Expose port 3000
EXPOSE 3000
CMD ["dist/index.js"]
