import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
    templateUrl: './private.component.html',
    styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

    @ViewChild("sidenav") public sidenav;
    public screenWidth:number;


    public constructor(){
        this.screenWidth = window.innerWidth;

        window.onresize = () =>{
            this.screenWidth = window.innerWidth;
        }
    }

    sidebarToggle(){
       this.sidenav.toggle();
    }
}