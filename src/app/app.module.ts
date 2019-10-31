import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/public/login/login.component';
import { CoreModule } from './core/core.module';
import { UIService } from './core/services/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private router: Router, private uiService:UIService){
    router.events.subscribe((event: Event)=>{

      if(event instanceof NavigationStart ){
        this.uiService.showLoader();
      }

      if (event instanceof NavigationEnd) {
        this.uiService.hideLoader();
      }

      if (event instanceof NavigationError) {
        this.uiService.hideLoader();
      }

    });
  }




}
