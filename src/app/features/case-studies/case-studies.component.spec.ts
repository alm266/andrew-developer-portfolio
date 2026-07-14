import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared';
import { CaseStudiesComponent } from './case-studies.component';

describe('CaseStudiesComponent', () => {
  let component: CaseStudiesComponent;
  let fixture: ComponentFixture<CaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseStudiesComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
