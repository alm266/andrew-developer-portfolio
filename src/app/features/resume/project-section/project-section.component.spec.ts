import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESUME_DATA } from '../resume-data';
import { ProjectSectionComponent } from './project-section.component';

describe('ProjectSectionComponent', () => {
  let component: ProjectSectionComponent;
  let fixture: ComponentFixture<ProjectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectSectionComponent);
    component = fixture.componentInstance;
    component.projects = RESUME_DATA.projects;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render selected projects', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Order Approval Tool');
    expect(compiled.textContent).toContain('Reserve Management Tool');
    expect(compiled.textContent).toContain('Therapy with Ruth Website');
    expect(compiled.textContent).toContain('Vendor Brand Planning Tool');
    expect(compiled.textContent).toContain('Cypress');
    expect(compiled.textContent).toContain('Google Search');
  });
});
