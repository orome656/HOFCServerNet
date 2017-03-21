import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Match } from '../models/match';

@Pipe({
    name: 'team',
    pure: false
})
@Injectable()
export class TeamPipe implements PipeTransform {
    transform(matchs: Match[], equipe) {
        return matchs != null ? matchs.filter(match => match.competition.categorie == equipe || match.competition.categorie == equipe) : null;
    }
}