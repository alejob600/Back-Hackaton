import mongoose, { ConnectionOptions } from 'mongoose'

(async () => {
    try{
        const db= await mongoose.connect('mongodb://161.35.55.181:27017/hackdb')
       //const db = await mongoose.connect('mongodb+srv://doadmin:iW72651cD3dxMJ94@hackatondb-c89e15a4.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=hackatondb&tls=true&tlsCAFile=',mongooseOptions);
        console.log('Database Conectada a:', db.connection.name)
    }
    catch(error){
        console.error(error)
    }
})()

