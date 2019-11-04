import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonComponent {
    public constructor(private titleService:Title){
        this.titleService.setTitle("Buttons");
    }
}