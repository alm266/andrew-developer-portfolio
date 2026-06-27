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
import { EducationSectionComponent } from './features/resume/education-section/education-section.component';
import { ExperienceCardComponent } from './features/resume/experience-card/experience-card.component';
import { ExperienceSectionComponent } from './features/resume/experience-section/experience-section.component';
import { ResumeComponent } from './features/resume';
import { SummarySectionComponent } from './features/resume/summary-section/summary-section.component';
import { WritingComponent } from './features/writing';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CaseStudiesComponent,
    ContactComponent,
    EducationSectionComponent,
    ExperienceCardComponent,
    ExperienceSectionComponent,
    HeroSectionComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    SummarySectionComponent,
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
