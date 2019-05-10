import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsComponent } from './forms.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [
    {path: "", component: FormsComponent}
]

@NgModule({
    declarations: [FormsComponent],
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: []
})
export class FormsModule {}