import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { toastrConfig } from '../../../config/toastr.config';

import { TopBarModule } from '../../../shared/modules/top-bar/top-bar.module';
import { QueryOutputModule } from '../../../shared/modules/query-output/query-output.module';
import { QuestTemplateAddonComponent } from './quest-template-addon.component';
import { FlagsSelectorModule } from '../../../shared/modules/selectors/flags-selector/flags-selector.module';
import { SingleValueSelectorModule } from '../../../shared/modules/selectors/single-value-selector/single-value-selector.module';

@NgModule({
  declarations: [
    QuestTemplateAddonComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TopBarModule,
    QueryOutputModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot(toastrConfig),
    FlagsSelectorModule,
    SingleValueSelectorModule,
  ],
  exports: [
    QuestTemplateAddonComponent,
  ],
})
export class QuestTemplateAddonModule {}