import { Request } from 'express';

export interface ITeam {
    id: number;
    name: string;
    league: string,
    isActive: boolean
};

export interface IGetTeamReq extends Request{}
export interface IAddTeamReq extends Request{}
export interface IUpdateTeamReq extends Request{}
export interface IDeleteTeamReq extends Request{}

export class Team implements ITeam{
    id: number;
    name: string;
    league: string;
    isActive: boolean;

    constructor(id: number, name: string, league: string, isActive: boolean){
        this.id = id;
        this.name = name;
        this.league = league;
        this.isActive = isActive;
    }
}