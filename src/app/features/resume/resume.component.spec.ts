import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSectionComponent } from './education-section/education-section.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
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

  it('should render professional experience entries', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const companies = Array.from(compiled.querySelectorAll('app-experience-card h3')).map((heading) =>
      heading.textContent?.trim()
    );

    expect(companies).toEqual([
      'Burlington Stores, Inc.',
      'Price Manager',
      'Statespace',
      'Triple C Technologies, LLC',
      'Digital Continue',
    ]);
  });

  it('should render education section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-education-section')).toBeTruthy();
  });

  it('should render professional summary section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-summary-section')).toBeTruthy();
  });
});
