import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match';
import { MatchService } from '../../services/matchs.service';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    private matchs: Match[];
    private team: string;
    private isLoading: boolean = true;
    
    constructor(private _matchService: MatchService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.subscribe(params => this.updateView(params));
    }

    updateView(params) {
        this.matchs = [];
        this.isLoading = true;
        this.team = this._route.snapshot.params['team'];
        this._matchService.getMatchs().subscribe(a => {
            this.matchs = a;
            this.isLoading = false;
        });
    }

    OpenMatchDetails() {
        console.log('Coucou');
    }
}