import { ViewportScroller } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;
  let scrollToAnchorSpy: jasmine.Spy;

  beforeEach(async () => {
    scrollToAnchorSpy = jasmine.createSpy('scrollToAnchor');

    await TestBed.configureTestingModule({
      declarations: [HeroSectionComponent],
      providers: [
        {
          provide: ViewportScroller,
          useValue: {
            scrollToAnchor: scrollToAnchorSpy,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to a section without using native anchor navigation', () => {
    const event = new Event('click');
    spyOn(event, 'preventDefault');

    component.scrollToSection(event, 'work');

    expect(event.preventDefault).toHaveBeenCalled();
    expect(scrollToAnchorSpy).toHaveBeenCalledWith('work');
  });
});
