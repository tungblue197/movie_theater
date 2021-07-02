import express from "express";
import privateRouter from "./routers/private/index";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/private", privateRouter);

app.listen(8000);
