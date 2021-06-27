import express from 'express';
import privateRouter from './routers/private/index'
const app = express();


app.get('/', (req, res) => {
    res.send('hello world');
})

app.use('/private', privateRouter)

app.listen(5001);