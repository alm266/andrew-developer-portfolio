import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { RESUME_DATA } from '../resume-data';
import { ExperienceSectionComponent } from './experience-section.component';

describe('ExperienceSectionComponent', () => {
  let component: ExperienceSectionComponent;
  let fixture: ComponentFixture<ExperienceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceCardComponent, ExperienceSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSectionComponent);
    component = fixture.componentInstance;
    component.entries = RESUME_DATA.experience;
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
});
