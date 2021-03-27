import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Homepage');
});

let port = process.env.port || 3000;
let server = app.listen(port, () => console.log(`Listening on Port ${server.address().port}`));