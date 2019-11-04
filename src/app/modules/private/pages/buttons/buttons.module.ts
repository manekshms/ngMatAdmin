import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { SharedModule } from '../../../../shared/shared.module'
import { UiModule } from '../../ui/ui.module'
import { ButtonComponent } from './buttons.component';

const routes:Routes = [
    {path: "", component: ButtonComponent}
];

@NgModule({
    declarations: [ButtonComponent],
    imports: [RouterModule.forChild(routes), SharedModule, UiModule],
    exports: []
})
export class ButtonsModule{
}