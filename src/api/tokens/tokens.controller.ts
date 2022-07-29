import { Request, Response } from 'express';
import { generateToken } from "../utils/jwt.utils";

export const getToken = (req: Request, res: Response): void => {
    res.send(generateToken());
}