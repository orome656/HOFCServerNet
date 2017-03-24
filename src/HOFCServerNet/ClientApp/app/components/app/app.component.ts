import { Component } from '@angular/core';
import { ActuService } from '../../services/actus.service';
import { MatchService } from '../../services/matchs.service';
import { RankService } from '../../services/ranks.service'

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ActuService, MatchService, RankService]
})
export class AppComponent {
}
