FROM mcr.microsoft.com/playwright:v1.17.1-focal
WORKDIR /app
COPY package.json .
RUN npm install
ENTRYPOINT [ "./entrypoint.sh" ]