import express from "express";
import { AdminNew } from "../controller/Admin.controller.js";
// import Admin from "../model/admin.model.js";
const router1 = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
router1.post("/admin",AdminNew)


export default router1;