FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 6006
CMD ["npm", "start"]