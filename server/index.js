import mongoose from "mongoose";
import app from "./app.js";
import logger from "./configs/logger.config.js";

//env variables
const {DATABASE_URL} = process.env;
const PORT = process.env.PORT || 8000;

//exit on mongodb error

mongoose.connection.on("error", (err)=> {
   logger.error(`Mongodb Connection error : ${err}`);
   process.exit(1);
});

//mongodb connection

mongoose.connect(DATABASE_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(()=> {
   logger.info("Connected to Mongodb");
})


const server = app.listen(PORT, ()=> {
   //console.log(`server is listening at ${PORT}`);
   //winstone makes error tracking,debugging,application monitoring
   logger.info(`Server is listening at ${PORT}...`);
});

