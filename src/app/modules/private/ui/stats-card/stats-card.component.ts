import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ui-stats-card',
    styleUrls: ['./stats-card.component.scss'],
    templateUrl: './stats-card.component.html'
})

export class StatsCardComponent {

    @Input("title") public title:string;

    @Input("value") public value:string;

    @Input("icon") public icon:string;

}