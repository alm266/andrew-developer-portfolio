import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared';
import { ProjectDataStatesComponent } from './project-data-states/project-data-states.component';
import { ProjectFeatureComponent } from './project-feature/project-feature.component';
import { ProjectSystemFlowComponent } from './project-system-flow/project-system-flow.component';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectDataStatesComponent,
        ProjectFeatureComponent,
        ProjectSystemFlowComponent,
        ProjectsComponent,
      ],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should present the reserve management project as an editorial project feature', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.project-feature')).toHaveSize(2);
    expect(compiled.querySelector('.project-feature')).toBeTruthy();
    expect(compiled.textContent).toContain('Reserve Management Tool');
    expect(compiled.textContent).toContain('Vendor Brand Planning Tool');
    expect(compiled.textContent).toContain('1,007 front-end unit tests');
    expect(compiled.textContent).toContain('604-test automated suite');
    expect(compiled.textContent).toContain('80 Cypress E2E tests');
    expect(compiled.textContent).toContain('5-person application team within a 4-team collaboration');
    expect(compiled.textContent).toContain('5–10 developers over time');
    expect(compiled.textContent).toContain('3 core teams');
    expect(compiled.textContent).toContain('Reconsider what belongs in an E2E test');
    expect(compiled.textContent).toContain('reserve E2E coverage for the critical workflows');
    expect(compiled.textContent).toContain('team’s first project-level end-to-end test suite');
    expect(compiled.textContent).not.toContain('80% reduction in pilot bugs');
    expect(compiled.textContent).toContain('Three states of schedule data');
    expect(compiled.querySelectorAll('.data-state-list > div')).toHaveSize(3);
    expect(compiled.textContent).toContain('A simplified collaboration flow');
    expect(compiled.textContent).toContain('Closed all 18 issues recorded in the pilot log');
    expect(compiled.querySelector('nav[aria-label="Projects"]')).toBeTruthy();
    expect(compiled.querySelectorAll('nav')).toHaveSize(1);
    expect(compiled.querySelector('.toc__children')).toBeFalsy();
    expect(compiled.querySelectorAll('.tool-chips li')).toHaveSize(10);
    expect(compiled.querySelector('.project-card')).toBeFalsy();
  });
});
