import express from "express";

// import currency from './currency.js';
import bodyParser from "body-parser";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(currency);

app.get("/", async(req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});