
import app from "./app.js";
import logger from "./configs/logger.config.js";

const PORT = process.env.PORT || 8000;


app.listen(PORT, ()=> {
   //console.log(`server is listening at ${PORT}`);
   //winstone makes error tracking,debugging,application monitoring
   logger.info(`Server is listening at ${PORT}...`);
});