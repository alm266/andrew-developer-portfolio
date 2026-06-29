import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSectionComponent } from './education-section/education-section.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ResumeComponent } from './resume.component';
import { SummarySectionComponent } from './summary-section/summary-section.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EducationSectionComponent,
        ExperienceCardComponent,
        ExperienceSectionComponent,
        ProjectSectionComponent,
        ResumeComponent,
        SummarySectionComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render professional experience section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-experience-section')).toBeTruthy();
  });

  it('should render education section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-education-section')).toBeTruthy();
  });

  it('should render project section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-project-section')).toBeTruthy();
  });

  it('should render professional summary section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-summary-section')).toBeTruthy();
  });
});
