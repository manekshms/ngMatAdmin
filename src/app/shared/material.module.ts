import { NgModule } from '@angular/core';

import { MatFormFieldModule, 
         MatRadioModule,
         MatInputModule,
         MatSelectModule,
         MatButtonModule,
         MatRippleModule,
         MatSidenavModule,
         MatIconModule,
         MatToolbarModule,
         MatMenuModule,
         MatProgressBarModule,
         MatTableModule,
         MatPaginatorModule
        } from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatRippleModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatRippleModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class MaterialModule{}