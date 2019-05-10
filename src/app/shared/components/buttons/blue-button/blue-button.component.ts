import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-btn-blue',
    templateUrl: './blue-button.component.html',
    styleUrls: ['./blue-button.component.scss']
})
export class BlueButtonComponent {

    @Input("fullLengthBtn") fullLengthBtn; 
    @Input("btnLarge") btnLarge; 
    @Input("btnShadow") btnShadow; 

}