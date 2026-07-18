import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSectionComponent } from './education-section/education-section.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ResumeComponent } from './resume.component';
import { ResumePdfService } from './resume-pdf.service';
import { SummarySectionComponent } from './summary-section/summary-section.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let resumePdfService: jasmine.SpyObj<ResumePdfService>;

  beforeEach(async () => {
    resumePdfService = jasmine.createSpyObj<ResumePdfService>('ResumePdfService', ['download']);
    resumePdfService.download.and.returnValue(Promise.resolve());

    await TestBed.configureTestingModule({
      declarations: [
        EducationSectionComponent,
        ExperienceCardComponent,
        ExperienceSectionComponent,
        ProjectSectionComponent,
        ResumeComponent,
        SummarySectionComponent,
      ],
      providers: [{ provide: ResumePdfService, useValue: resumePdfService }],
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

  it('should expose one shared source for the webpage and future PDF', () => {
    expect(component.resumeData.contact.email).toBe('andrewleonmarshall@gmail.com');
    expect(component.resumeData.experience).toHaveSize(5);
    expect(component.resumeData.projects).toHaveSize(4);
    expect(component.resumeData.skillGroups.length).toBeGreaterThan(0);
  });

  it('should download the shared résumé data from the floating action', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector<HTMLButtonElement>('.resume-download__button');

    expect(button).toBeTruthy();

    button?.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(resumePdfService.download).toHaveBeenCalledOnceWith(component.resumeData);
    expect(component.isDownloading).toBeFalse();
  });
});
