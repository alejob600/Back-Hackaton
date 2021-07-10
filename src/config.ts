import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.HELLO)
 
 export default{
     MONGO_DATABASE: process.env.MONGO_DATABASE || 'hackdb',
     MONGO_USER: process.env.MONGO_USER || 'admin',
     MONGO_PASSWORD:process.env.MONGO_PASSWORD ||'admin',
     MONGO_HOST: process.env.MONGO_HOST || '161.35.55.181:27017/'     
 }