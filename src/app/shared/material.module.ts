import { NgModule } from '@angular/core';

import { MatFormFieldModule, 
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
        } from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
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