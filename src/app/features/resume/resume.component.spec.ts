import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceCardComponent, ResumeComponent],
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
});
