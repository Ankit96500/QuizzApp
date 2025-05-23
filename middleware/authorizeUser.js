import User from "../models/userModel.js";

import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config(); 

export const authorize = async (req, res, next) => {
        
    try {
        const token = req.header('Authorization');
   
        // verify the token:
        const userId = JWT.verify(token, process.env.JWT_SECRET_KEY);
   

        const user = await User.findByPk(userId.user_id);
        
        req.user = user;
        
        next();
    } catch (error) {
        return res.status(401).json({success:false,error:error})
    }

};











