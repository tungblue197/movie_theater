import express from "express";
import privateRouter from "./routers/private/index";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
// const  swaggerDocument = require('./swagger.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/api-docs', swaggerUi.serve);
// app.get('/api-docs', swaggerUi.setup(swaggerDocument))

app.use("/api/private", privateRouter);

app.listen(8000);
