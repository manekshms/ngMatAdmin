import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';


const routes:Routes = [
    {   path: "", component: PrivateComponent,
        children: [
            {path: "", loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
            {path: "tables", loadChildren: './pages/tables/tables.module#TablesModule'},
            {path: "forms", loadChildren: './pages/forms/forms.module#FormsModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule {}