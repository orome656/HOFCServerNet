import { Component, OnInit } from '@angular/core';
import { ActuService } from '../../services/actus.service';
import { Actu } from '../../models/Actu';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    private actus: Actu[];

    constructor(private _actuService: ActuService) {

    }

    ngOnInit() {
        this._actuService.getActus().subscribe(a => this.actus = a);
    }
}
