import express from "express"
import { AuthController } from "../controller/authController.js"

export const authRoutes = express.Router()
const authController = new AuthController()

authRoutes.post("/signUp", authController.signUp)
authRoutes.post("/signIn", authController.signIn)

