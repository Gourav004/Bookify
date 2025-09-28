import express from "express"
import {createUser, login} from "../Controller/user.controller.js"

const router = express.Router();

router.post("/signup" , createUser);
router.post("/login" , login);

export default router;