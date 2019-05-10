import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core'

@Component({
    selector: 'app-ui-message-card',
    templateUrl: './message-card.component.html',
    styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent {

    @Input("icon") public icon:string = 'notification_important_strocked';

    @Input("title") public title:string = "";

    @Input("message") public message:string = "";

    @Input("showButton") public showButton:boolean = true;

    @Input("buttonText") public buttonText:string = "Close";

    @Input("disableButtonAction") disableButtonAction = false; 

    @Output("buttonClick") public buttonClick = new EventEmitter();


    public constructor( private elementRef:ElementRef){}



    public onButtonClick(event:Event) {
        if(!this.disableButtonAction){
            this.elementRef.nativeElement.remove();
        }
        this.buttonClick.emit(event);
    }



}