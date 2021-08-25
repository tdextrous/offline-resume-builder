# Build environment
FROM node:16-alpine as react-build
WORKDIR /app

# Take advantage of caching for big node_modules/ install.
COPY package.json /app
#COPY package-lock.json /app
RUN npm i

# Set environment variables for build
ARG API_BASE_URL
ENV API_BASE_URL=${API_BASE_URL}

# Do build
COPY . /app
RUN npm run build

# Server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
ENV HOST 0.0.0.0
RUN sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
