import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
dotenv.config();
connectDB();
const app =express();
//middelwares
app.use(express.json());
app.use(morgan('dev'));

app.get ("/",(req,res)=>{
    res.send({
        message:"Welcome to ecomerce app",
    });
});

const PORT =process.env.PORT || 8080 ;

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});