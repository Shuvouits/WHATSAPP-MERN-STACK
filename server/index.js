import dotenv from "dotenv";
import app from "./app.js";

//dot env config
dotenv.config();

const PORT = process.env.PORT || 8000;


app.listen(PORT, ()=> {
    console.log(`server is listening at ${PORT}`);
});