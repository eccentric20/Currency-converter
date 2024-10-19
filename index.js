import express from "express";

// import currency from './currency.js';
import bodyParser from "body-parser";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));



// app.use(currency);

app.get("/", async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});