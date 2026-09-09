import express from 'express';
import morgan from 'morgan'
const app = express();
const port = 4000;

app.use(morgan('combined'));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    console.log("query params", req.query);
    console.log("request body", req.body);

    return res.json({
        message: "world"
    });
});

app.get('/tweets/:tweet_id/comments/:comment_id', (req, res) => {
    console.log(req.params); // url params
    return res.json({
        message: 'tweet details'
    });
});
app.get('/', (req, res) => {
    return res.send("Hello");
});

app.get('/home', (req, res) => {
    return res.status(200).json({
        message: "Welcome to home"
    });
});

app.use((req, res) => {
    return res.status(404).json({
        message: "Not Found"
    });
});

app.listen(port, () => {
    console.log("express working at", port);
});