import { Request, RequestHandler, Response } from 'express';
import { CustomError } from '../models/custom-error.model';
import { IAddTeamReq, ITeam, Team } from './teams.model';

const TEAMS = [
  new Team(1, 'Real Madrid', 'La Liga', true),
  new Team(2, 'Manchester United', 'Premier League', true),
  new Team(3, 'Barcelona', 'La Liga', true),
  new Team(4, 'Liverpool', 'Premier League', true),
  new Team(5, 'Arsenal', 'Premier League', true),
  new Team(6, 'Inter', 'Serie A', true),
  new Team(7, 'Milan', 'Serie A', true),
  new Team(8, 'Juventus', 'Serie A', true)
];

/**
 * Get active team records
 *
 * @param req Express Request
 * @param res Express Response
 */
 export const getTeams: RequestHandler = (req: Request, res: Response) => {
  const activeTeams = TEAMS.filter((team) => team.isActive);
  res.send(activeTeams);
};

/**
 * Get team record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getTeamById: RequestHandler = (req: IGetTeamReq, res: Response) => {
  const team = TEAMS.find((team) => team.id === +req.params.id && team.isActive);

  if(!team){
    throw new CustomError("No team found with the provided Id", 404);
  }

  res.send(team);
};

/**
 * Inserts a new team record based
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addTeam: RequestHandler = (req: IAddTeamReq, res: Response) => {
  const lastTeamIndex = TEAMS.length - 1;
  const lastId = TEAMS[lastTeamIndex].id;
  const id = lastId + 1;
  const newTeam: ITeam = {
    ...req.body,
    id,
    isActive: true
  };

  TEAMS.push(newTeam);

  res.send(newTeam);
};

/**
 * Updates existing team record
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateTeamById: RequestHandler = (req: IUpdateTeamReq, res: Response) => {
  const currentTeam = TEAMS.find((team) => team.id === +req.params.id && team.isActive);

  if(!currentTeam){
    throw new CustomError("No team found with the provided Id", 404);
  }

  currentTeam.name = req.body.name || currentTeam.name;
  currentTeam.league = req.body.league || currentTeam.league;

  res.send({ success: true });
};

/**
 * deletes a team
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteTeamById: RequestHandler = (req: IDeleteTeamReq, res: Response) => {
  const teamIndex = TEAMS.findIndex((team) => team.id === +req.params.id && team.isActive);
  TEAMS.splice(teamIndex, 1);

  res.send({ success: true });
};