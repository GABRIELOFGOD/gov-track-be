import { Router } from "express";
import { createProject } from "src/controllers/project.controller";

const router = Router();

router.post("/new", createProject);

export default router;