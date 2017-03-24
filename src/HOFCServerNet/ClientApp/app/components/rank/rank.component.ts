import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankService } from '../../services/ranks.service';
import { Classement } from '../../models/classement';

@Component({
    templateUrl: './rank.component.html',
    selector: 'rank'
})
export class RankComponent implements OnInit {
    private _ranks: Classement[];
    private team: string;
    private isLoading: boolean = true;

    constructor(private _rankService: RankService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.subscribe(params => this.updateView(params));
    }

    updateView(params) {
        this._ranks = [];
        this.isLoading = true;
        this.team = this._route.snapshot.params['team'];
        this._rankService.getClassements()
            .subscribe(c => {
                this._ranks = c;
                this.isLoading = false;
            });
    }
}