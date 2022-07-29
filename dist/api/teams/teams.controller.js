"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteTeamById = exports.updateTeamById = exports.addTeam = exports.getTeamById = exports.getTeams = void 0;
const TeamService = __importStar(require("./teams.service"));
/**
 * Get active team records
 *
 * @param req Express Request
 * @param res Express Response
 */
const getTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield TeamService.getTeams();
        res.status(200).json({
            teams
        });
    }
    catch (error) {
        console.error('[teams.controller][getTeams][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when fetching teams'
        });
    }
});
exports.getTeams = getTeams;
/**
 * Get team record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
const getTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const team = yield TeamService.getTeamById(req.params.id);
        res.status(200).json({
            team
        });
    }
    catch (error) {
        console.error('[teams.controller][getTeamById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when fetching team'
        });
    }
});
exports.getTeamById = getTeamById;
/**
 * Inserts a new team record based
 *
 * @param req Express Request
 * @param res Express Response
 */
const addTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TeamService.insertTeam(req.body);
        res.status(200).json({
            result
        });
    }
    catch (error) {
        console.error('[teams.controller][addTeam][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when adding new team'
        });
    }
});
exports.addTeam = addTeam;
/**
 * Updates existing team record
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
const updateTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TeamService.updateTeam(Object.assign(Object.assign({}, req.body), { id: req.params.id }));
        res.status(200).json({
            result
        });
    }
    catch (error) {
        console.error('[teams.controller][updateTeamById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when updating team'
        });
    }
});
exports.updateTeamById = updateTeamById;
/**
 * deletes a team
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
const deleteTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TeamService.deleteTeam(req.params.id);
        res.status(200).json({
            result
        });
    }
    catch (error) {
        console.error('[teams.controller][deleteTeamById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when deleting team'
        });
    }
});
exports.deleteTeamById = deleteTeamById;
//# sourceMappingURL=teams.controller.js.map