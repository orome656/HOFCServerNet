import { Component } from '@angular/core';
import { ActuService } from '../../services/actus.service'

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ ActuService ]
})
export class AppComponent {
}
