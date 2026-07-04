import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleCardComponent } from './components/article-card/article-card.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';

@NgModule({
  declarations: [ArticleCardComponent, SideNavComponent, SiteFooterComponent, TableOfContentsComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    ArticleCardComponent,
    CommonModule,
    SideNavComponent,
    SiteFooterComponent,
    TableOfContentsComponent,
  ],
})
export class SharedModule {}
