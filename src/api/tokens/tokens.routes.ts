import { Router } from "express";
import { getToken } from "./tokens.controller";

const router = Router();

router
  .route('/')
  .get(
    getToken
  );

  export default router;