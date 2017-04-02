import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match';
import { MatchService } from '../../services/matchs.service';

@Component({
    selector: 'agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
    private matchs: Match[];
    private date: Date;
    private isLoading: boolean = true;

    private navLinks = [{
            link: '/agenda/20-03-2017',
            label: '20-03-2017'
        },{
            link: '/agenda/27-03-2017',
            label: '27-03-2017'
        },{
            link: '/agenda/03-04-2017',
            label: '03-04-2017'
    }];

    constructor(private _matchService: MatchService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.subscribe(params => this.updateView(params));
    }

    updateView(params) {
        this.matchs = [];
        this.isLoading = true;
        var splitDate = this._route.snapshot.params['date'].split('-');
        this.date = new Date(splitDate[2], splitDate[1], splitDate[0]);
        this._matchService.getMatchs().subscribe(a => {
            this.matchs = a;
            this.isLoading = false;
        });
    }

    isHOFC(team: string) {
        return !(team != null && team.indexOf("HORGUES ODOS") != -1);
    }

    OpenMatchDetails() {
        console.log('Coucou');
    }
}