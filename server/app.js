import express from "express";
import dotenv from "dotenv";
import morgan from "morgan"; 
import helmet from "helmet"; 
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";

//dot env config
dotenv.config();

//create express app
const app = express();

//morgan
app.use(morgan());  //provides a way to log details of incoming requests
app.use(helmet());  //security through HTTP response headers.

//parse json request url
app.use(express.json());

//parse json request body
app.use(express.urlencoded({ extended: true }))

//Security for database
app.use(mongoSanitize())

// It helps extract cookie data easily accessible in req.cookies
app.use(cookieParser());

//zip compression
app.use(compression())

//file upload
app.use(fileUpload({
    useTempFiles: true,
}))

//cors 
app.use(cors({origin: "http://localhost:3000"}))

app.get('/test', (req, res) => {
    res.send(req.body);
})


export default app;