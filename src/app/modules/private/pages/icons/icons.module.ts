import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { IconsComponent } from './icons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from '../../ui/ui.module';

const routes:Routes = [{path: '', component: IconsComponent}];

@NgModule({
    declarations: [IconsComponent],
    imports: [RouterModule.forChild(routes), SharedModule, UiModule],
    exports: []
})
export class IconsModule {}