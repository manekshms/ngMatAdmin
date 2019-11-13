import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypographyComponent } from './typography.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from '../../ui/ui.module';

const routes:Routes = [
    {path: "", component: TypographyComponent}
];

@NgModule({
    declarations: [TypographyComponent],
    imports: [RouterModule.forChild(routes), SharedModule, UiModule],
    exports: []
})
export class TypographyModule {}