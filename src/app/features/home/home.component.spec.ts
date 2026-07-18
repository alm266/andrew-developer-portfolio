import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewportScroller } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSectionComponent, HomeComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ViewportScroller,
          useValue: {
            scrollToAnchor: jasmine.createSpy('scrollToAnchor'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide meaningful paths into projects, writing, and contact', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.featured-project')).toHaveSize(3);
    expect(compiled.textContent).toContain('Order Approval Tool');
    expect(compiled.textContent).toContain('1,007');
    expect(compiled.querySelectorAll('.writing-preview')).toHaveSize(2);
    expect(compiled.textContent).toContain('Batch Job Runbook');
    expect(compiled.querySelectorAll('.capability-grid article')).toHaveSize(3);
    expect(compiled.textContent).toContain('Contact me');
  });
});
