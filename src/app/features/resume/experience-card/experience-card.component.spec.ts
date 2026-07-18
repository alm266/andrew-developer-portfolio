import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExperience } from '../resume-data';
import { ExperienceCardComponent } from './experience-card.component';

describe('ExperienceCardComponent', () => {
  let component: ExperienceCardComponent;
  let fixture: ComponentFixture<ExperienceCardComponent>;

  const entry: ResumeExperience = {
    company: 'Test Company',
    role: 'Test Role',
    dateRange: '2020 - Present',
    location: 'Test City',
    highlights: ['Built useful things.', 'Improved useful things.'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceCardComponent);
    component = fixture.componentInstance;
    component.entry = entry;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the experience entry', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(entry.company);
    expect(compiled.textContent).toContain(entry.role);
    expect(compiled.textContent).toContain(entry.dateRange);
    expect(compiled.textContent).toContain(entry.location);
    expect(compiled.textContent).toContain(entry.highlights[0]);
    expect(compiled.textContent).toContain(entry.highlights[1]);
  });
});
