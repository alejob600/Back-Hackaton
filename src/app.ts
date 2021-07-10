import express from 'express'
import  morgan  from 'morgan'
//import config from './config' 
import cors from 'cors' 
import videoRoutes from './routes/videos.routes'

const app=express()
app.use(morgan('dev'));
app.use(videoRoutes);
app.use(cors());
app.use(express.urlencoded({extended:false}));

export default app