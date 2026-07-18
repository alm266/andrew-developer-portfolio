import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESUME_DATA } from '../resume-data';
import { SummarySectionComponent } from './summary-section.component';

describe('SummarySectionComponent', () => {
  let component: SummarySectionComponent;
  let fixture: ComponentFixture<SummarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummarySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummarySectionComponent);
    component = fixture.componentInstance;
    component.summary = RESUME_DATA.summary;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the professional summary', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Professional summary');
    expect(compiled.textContent).toContain('developer advocacy');
  });
});
