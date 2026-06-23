import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, SideNavComponent],
})
export class SharedModule {}
