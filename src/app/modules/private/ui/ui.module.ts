import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { MessageCardComponent } from './message-card/message-card.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { CardHeaderTitleComponent } from './card/card-header/card-header-title/card-header-title.component';

@NgModule({
    declarations: [MessageCardComponent,
                     StatsCardComponent,
                     CardComponent,
                     CardHeaderComponent,
                     CardHeaderTitleComponent,
                     CardBodyComponent,
                     CardFooterComponent
                   ],
    imports: [SharedModule],
    exports: [MessageCardComponent, 
                StatsCardComponent,
                CardComponent,
                CardHeaderComponent,
                CardHeaderTitleComponent,
                CardBodyComponent,
                CardFooterComponent
            ]
})
export class UiModule {}