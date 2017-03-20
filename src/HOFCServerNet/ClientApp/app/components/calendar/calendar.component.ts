import { Component, OnInit } from '@angular/core';
import { Match } from '../../models/match';
import { MatchService } from '../../services/matchs.service';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    private matchs: Match[];


    constructor(private _matchService: MatchService) {

    }

    ngOnInit() {
        this._matchService.getMatchs().subscribe(a => this.matchs = a);
    }

    OpenMatchDetails() {
        console.log('Coucou');
    }
}