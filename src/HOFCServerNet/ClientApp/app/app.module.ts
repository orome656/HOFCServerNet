import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardComponent } from './components/card/card.component';
import { RankComponent } from './components/rank/rank.component';
import { TeamPipe } from './filters/team';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        CardComponent,
        CalendarComponent,
        RankComponent,
        TeamPipe
    ],
    imports: [
        MaterialModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'calendar/:team', component: CalendarComponent, },
            { path: 'rank/:team', component: RankComponent, },
            { path: '**', redirectTo: 'home' }
        ]),
        FlexLayoutModule,
        UniversalModule // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.

    ]
})
export class AppModule {
}
