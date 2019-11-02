import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
    public hidePassword = true;
    public hideConfirmPassword = true;
    public constructor(private titleService:Title) {
        this.titleService.setTitle("Forms");
    }
}