import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AboutComponent } from './features/about';
import { CaseStudiesComponent } from './features/case-studies';
import { ContactComponent } from './features/contact';
import { HeroSectionComponent } from './features/home/hero-section/hero-section.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects';
import { ResumeComponent } from './features/resume';
import { WritingComponent } from './features/writing';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CaseStudiesComponent,
    ContactComponent,
    HeroSectionComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    WritingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
