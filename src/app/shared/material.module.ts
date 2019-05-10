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
         MatTableModule
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
        MatTableModule
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
        MatTableModule
    ]
})
export class MaterialModule{}