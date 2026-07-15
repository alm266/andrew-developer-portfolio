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

    expect(compiled.querySelector('.project-feature')).toBeTruthy();
    expect(compiled.textContent).toContain('Reserve Management Tool');
    expect(compiled.textContent).toContain('Three states of schedule data');
    expect(compiled.querySelectorAll('.data-state-list > div')).toHaveSize(3);
    expect(compiled.textContent).toContain('A simplified collaboration flow');
    expect(compiled.textContent).toContain('Closed all 18 issues recorded in the pilot log');
    expect(compiled.querySelector('nav[aria-label="Projects"]')).toBeTruthy();
    expect(compiled.querySelectorAll('nav')).toHaveSize(1);
    expect(compiled.querySelector('.toc__children')).toBeFalsy();
    expect(compiled.querySelectorAll('.tool-chips li')).toHaveSize(4);
    expect(compiled.querySelector('.project-card')).toBeFalsy();
  });
});
