import { Router } from "express";
import { getAll } from "../../controllers/user.controller";

const router = Router()

router.get("/", getAll)

export default router