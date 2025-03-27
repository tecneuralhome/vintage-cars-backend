const mongoose = require('mongoose')
var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const Yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = Yaml.load("./docs/api.yaml");
const dotenv = require("dotenv");
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
dotenv.config();
const config = require("./config/config")
var userRoute = require("./routes/userRoute");
var carRoute = require("./routes/carRoute");

mongoose.connect(`mongodb://${config.databaseUrl}/vintageCarsDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

var app = express();
app.use('/carImages', express.static('carImages'));
app.use('/sliderImages', express.static('sliderImages'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors({origin: '*'}));
app.use('*', createProxyMiddleware({
  target: 'http://54.183.73.207:8080',
  changeOrigin: true,
  secure: false,  // Avoid SSL issues in development
}));

// app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/cars', carRoute);
app.use('/user', userRoute);
// app.use("/assets", express.static(path.join(__dirname, 'dist/test/browser/assets')));
app.use("/assets", express.static(path.join(__dirname, 'dist/dist/vintage-cars-frontend/browser/assets')));
app.use(express.static(path.join(__dirname, 'dist/dist/vintage-cars-frontend/browser')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/dist/vintage-cars-frontend/browser/index.html'));
});

app.set("port", config.port);
app.listen(app.get("port"), () =>
console.log(`App started on port ${app.get("port")}`)
);