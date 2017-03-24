import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardComponent } from './components/card/card.component';
import { RankComponent } from './components/rank/rank.component';
import { MDL } from './components/app/MaterialDesignLiteUpgradeElement';
import { TeamPipe } from './filters/team';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        CardComponent,
        CalendarComponent,
        RankComponent,
        MDL,
        TeamPipe
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'calendar/:team', component: CalendarComponent, },
            { path: 'rank/:team', component: RankComponent, },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
