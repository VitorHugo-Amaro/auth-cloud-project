import express,{type Request,type Response} from "express";
import jwt from "jsonwebtoken";
import cors from 'cors';
import dotenv from "dotenv";
import { fileURLToPath } from 'node:url';

dotenv.config();

const token = jwt
const app = express()
app.use(express.json());
app.use(cors());  

const  SECRET_KEY = process.env.JWT_SECRET || "fallback";
app.post('/login' , (req:Request, res:Response)=>{
    const {email,password} = req.body;
    if(email=="vitoor@hugo.com" && password == "1234"){
        token.sign({email},SECRET_KEY,{expiresIn:'1h'});
        return res.status(200).json({auth:true,token});
    }
    return res.status(401).json({message:'Login inválido'})
});
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}

export default app;