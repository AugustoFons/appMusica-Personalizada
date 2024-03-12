/* import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected) {
        console.log('DB Connected!!!')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: 'bernar_blog',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error)
    }
}
 */
/* https://www.youtube.com/watch?v=O5cmLDVTgAs&t=19014s 2:03 */