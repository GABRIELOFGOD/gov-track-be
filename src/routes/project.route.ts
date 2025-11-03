import { Router } from "express";
import { createProject, getProjects } from "../controllers/project.controller";

const router = Router();

router.route("/").post(createProject).get(getProjects);

export default router;