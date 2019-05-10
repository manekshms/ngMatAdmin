import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

    @Output('toggleSidebar') toggleSidebar = new EventEmitter()

    ngOnInit(){

    }

    sideMenuToggle(event){
        event.preventDefault();
        this.toggleSidebar.emit(); 
    }
}