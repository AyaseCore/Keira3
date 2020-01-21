import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { toastrConfig } from '../../../config/toastr.config';

import { SingleValueSelectorModule } from '../../../shared/modules/selectors/single-value-selector/single-value-selector.module';
import { TopBarModule } from '../../../shared/modules/top-bar/top-bar.module';
import { QueryOutputModule } from '../../../shared/modules/query-output/query-output.module';
import { GossipMenuOptionComponent } from './gossip-menu-option.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    GossipMenuOptionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TopBarModule,
    QueryOutputModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot(toastrConfig),
    NgxDatatableModule,
    SingleValueSelectorModule,
  ],
  exports: [
    GossipMenuOptionComponent,
  ],
})
export class GossipMenuOptionModule {}