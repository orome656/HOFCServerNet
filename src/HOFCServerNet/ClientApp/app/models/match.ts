import { Competition } from './competition';
import { StatutVote } from '../enums/StatutVote';

export class Match {
    id: number;
    equipe1: string;
    equipe2: string;
    score1: number;
    score2: number;
    date: Date;
    message: string;
    infos: string;
    competition: Competition;
    voteStatut: StatutVote;
}