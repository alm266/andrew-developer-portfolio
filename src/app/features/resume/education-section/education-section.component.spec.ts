import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSectionComponent } from './education-section.component';

describe('EducationSectionComponent', () => {
  let component: EducationSectionComponent;
  let fixture: ComponentFixture<EducationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the education details', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Rutgers University, New Brunswick');
    expect(compiled.textContent).toContain('BS, Computer Science');
    expect(compiled.textContent).toContain('Second major in English');
    expect(compiled.textContent).toContain('Graduated 2017');
  });
});
