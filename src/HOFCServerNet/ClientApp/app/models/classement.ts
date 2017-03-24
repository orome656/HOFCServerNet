import { Competition } from './competition';


export class Classement {
    id: number;
    nom: string;
    joue: number;
    points: number;
    victoire: number;
    nul: number;
    defaite: number;
    bp: number;
    bc: number;
    diff: number;
    competition: Competition;
}