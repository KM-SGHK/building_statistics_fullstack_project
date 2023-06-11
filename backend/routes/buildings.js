import express from "express"
import { BuildingsController } from "../controller/buildingsController.js"
import { routeGuard } from "../helper/auth.js"

export const buildingsRoutes = express.Router()
const buildingsController = new BuildingsController()

buildingsRoutes.get("/eui", routeGuard(), buildingsController.fetchEUI)
buildingsRoutes.get("/details", routeGuard(), buildingsController.fetchBuildings)