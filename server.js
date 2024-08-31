const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => { 
    res.send("kfjasldkfjsdlkfj");
});

app.get('/home', (req, res) => { 
    res.send("this is home");
});


app.listen(port, () => {
    console.log("Server is listening on port number " + port);
});