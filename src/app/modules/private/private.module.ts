import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../../shared/shared.module'
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
    declarations: [PrivateComponent, HeaderComponent, SidebarComponent, FooterComponent],
    imports: [PrivateRoutingModule, SharedModule],
    exports: [],
    bootstrap: [PrivateComponent],
})
export class PrivateModule {}