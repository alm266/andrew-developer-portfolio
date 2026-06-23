import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent, SiteFooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, SideNavComponent, SiteFooterComponent],
})
export class SharedModule {}
