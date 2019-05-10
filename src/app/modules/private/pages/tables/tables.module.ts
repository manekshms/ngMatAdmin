import { NgModule } from '@angular/core';
import { TablesComponent } from './tables.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [ { path: "", component: TablesComponent}]

@NgModule({
    declarations: [TablesComponent],
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [],
})
export class TablesModule {}