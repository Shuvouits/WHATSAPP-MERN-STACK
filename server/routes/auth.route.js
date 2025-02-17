import express from "express";
import trimRequest from "trim-request"
import { register } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(trimRequest.all, register);

export default router;

//e4DoT6fmsP2rw9bR
//mongodb+srv://shuvo:<db_password>@cluster0.5wbn0.mongodb.net/
//mongodb+srv://shuvo:e4DoT6fmsP2rw9bR@cluster0.5wbn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0