import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

import { BlueButtonComponent } from "./components/buttons/blue-button/blue-button.component"

@NgModule({
    declarations: [LoaderComponent, BlueButtonComponent],
    imports: [MaterialModule, FlexLayoutModule, CommonModule],
    exports: [MaterialModule, FlexLayoutModule, LoaderComponent, BlueButtonComponent, CommonModule]
})
export class SharedModule {}