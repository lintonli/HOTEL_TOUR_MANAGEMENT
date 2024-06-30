import { RegisterSchema } from "../Helpers/validation";
import Bcrypt from "bcrypt";
import mssql from "mssql";
import { Request, Response, RequestHandler } from "express";
import { v4 as uid } from "uuid";
import dotenv from "dotenv";
import path from "path";
import { sqlConfig } from "../config";
import { DbHelper } from "../Helpers/databaseHelper";
import { IUser, Payload } from "../Models/UserModel";
import  Jwt  from "jsonwebtoken";

const databaseInstance = new DbHelper();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const id = uid();
    const { NAME, EMAIL, PASSWORD,} = req.body;
    const ROLE="USER"
    const { error } = RegisterSchema.validate(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }
    const hashedPassword = await Bcrypt.hash(PASSWORD, 10);
    // console.log(ROLE)
    await databaseInstance.exec("addUser", {
      ID: id,
      NAME: NAME,
      EMAIL: EMAIL,
      PASSWORD: hashedPassword,
      ROLE:ROLE
    });
    return res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const loginUser= async (req:Request, res:Response)=>{
    try {
        const {EMAIL, PASSWORD}=req.body
        let user = await(await databaseInstance.exec('getUser',{EMAIL})).recordset
        //  console.log(user);
        if(user.length!==0){
            const isValid = await Bcrypt.compare(PASSWORD, user[0].UPASSWORD)
            if(isValid){
                const payload:Payload={
                    SUB:user[0].ID,
                    UNAME:user[0].UNAME,
                    UROLE:user[0].UROLE
                }
                  // console.log(user);
                const token = Jwt.sign(payload, process.env.SECRET as string,{expiresIn:"2h"})
                
                return res.status(200).json({message:"Login successfull", token})
            }
            return res.status(400).json({ message: "Invalid credentials" });
        }
          // console.log(user);
          // console.log(req.body)
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const deleteUser= async (req:Request<{id:string}>, res:Response)=>{
  try {
    const user =(await databaseInstance.exec('getUser',{ID:req.params.id})).recordset[0] as IUser
    if(user && user.ID){
      await databaseInstance.exec("deleteUser",{ID:req.params.id});
      return res.status(200).json({message:"User deleted successfully"})
    }
    return res.status(404).json({message:"User not found"})
  } catch (error) {
    return res.status(500).json(error)
  }
}
