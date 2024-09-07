import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export const getAll = async (req:Request, res:Response) => {
  try {
    return res.status(200).json({ success: true, message: "Users get succesfully", data: [] })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message:"Internal server error", data: null})
  }
}