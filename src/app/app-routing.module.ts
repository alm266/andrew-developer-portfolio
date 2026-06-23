import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './features/about';
import { CaseStudiesComponent } from './features/case-studies';
import { ContactComponent } from './features/contact';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects';
import { ResumeComponent } from './features/resume';
import { WritingComponent } from './features/writing';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Andrew Marshall | Front-End Engineer',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects | Andrew Marshall',
  },
  {
    path: 'case-studies',
    component: CaseStudiesComponent,
    title: 'Case Studies | Andrew Marshall',
  },
  {
    path: 'writing',
    component: WritingComponent,
    title: 'Writing | Andrew Marshall',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Andrew Marshall',
  },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Resume | Andrew Marshall',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Andrew Marshall',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
