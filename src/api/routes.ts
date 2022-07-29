import { Router } from 'express';
import TeamsRoutes from './teams/teams.routes';
import TokensRouter from './tokens/tokens.routes';

const router = Router();

router.use('/teams', TeamsRoutes);
router.use('/token', TokensRouter);

export default router;