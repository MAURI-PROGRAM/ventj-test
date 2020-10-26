FROM node:13.11.0-alpine

WORKDIR /var/www/ve-web-engine-front

# ENVIRONNEMENT
ENV GLIB_PACKAGE_BASE_URL https://github.com/sgerrand/alpine-pkg-glibc/releases/download
ENV GLIB_VERSION 2.25-r0

#ENV IONIC_VERSION 4.12.0
ENV IONIC_VERSION 5.3.0

# INSTALL IONIC AND CORDOVA
RUN npm install -g cordova ionic@${IONIC_VERSION}

# INSTALL DEPENDENCIES
COPY ./package.json /var/www/ve-web-engine-front/package.json
COPY ./package-lock.json /var/www/ve-web-engine-front/package-lock.json
RUN npm install

CMD ["tail", "-f", "/dev/null"]
#CMD ["ionic", "serve", "--external"]
#CMD ["ng", "serve", "--poll", "200", "--host=0.0.0.0", "--port=8100"]