module.exports = {
  port: process.env.PORT || 8080,
  authorizationSecretkey: process.env.AUTHORIZATIONSECRETKEY || "secretkey",
  databaseUrl: process.env.DATABASEURL || "localhost:27017"
};