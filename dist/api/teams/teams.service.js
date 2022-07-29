"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeam = exports.updateTeam = exports.insertTeam = exports.getTeamById = exports.getTeams = void 0;
const mysql_connector_1 = require("./../utils/mysql.connector");
const teams_queries_1 = require("./teams.queries");
/**
 * gets active teams
 */
const getTeams = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, mysql_connector_1.execute)(teams_queries_1.TeamQueries.GetTeams, []);
});
exports.getTeams = getTeams;
/**
 * gets a team based on id provided
 */
const getTeamById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, mysql_connector_1.execute)(teams_queries_1.TeamQueries.GetTeamsById, [id]);
});
exports.getTeamById = getTeamById;
/**
 * adds a new active team record
 */
const insertTeam = (team) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, mysql_connector_1.execute)(teams_queries_1.TeamQueries.AddTeam, [
        team.name,
        team.league
    ]);
    return result.affectedRows > 0;
});
exports.insertTeam = insertTeam;
/**
 * updates team information based on the id provided
 */
const updateTeam = (team) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, mysql_connector_1.execute)(teams_queries_1.TeamQueries.UpdateTeamById, [
        team.name,
        team.league,
        team.id
    ]);
    return result.affectedRows > 0;
});
exports.updateTeam = updateTeam;
/**
 * updates team information based on the id provided
 */
const deleteTeam = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, mysql_connector_1.execute)(teams_queries_1.TeamQueries.DeleteTeamById, [
        id
    ]);
    return result.affectedRows > 0;
});
exports.deleteTeam = deleteTeam;
//# sourceMappingURL=teams.service.js.map