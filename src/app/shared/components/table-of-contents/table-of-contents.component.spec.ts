import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfContentsComponent } from './table-of-contents.component';

describe('TableOfContentsComponent', () => {
  let component: TableOfContentsComponent;
  let fixture: ComponentFixture<TableOfContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOfContentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableOfContentsComponent);
    component = fixture.componentInstance;
    component.items = [
      {
        id: 'test-article',
        title: 'Test article',
        children: [{ id: 'test-section', title: 'Test section' }],
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use a configurable accessible label', () => {
    component.ariaLabel = 'Projects';
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('nav') as HTMLElement;
    expect(nav.getAttribute('aria-label')).toBe('Projects');
  });

  it('should render optional nested items', () => {
    const nestedLink = fixture.nativeElement.querySelector('.toc__child-link') as HTMLAnchorElement;

    expect(nestedLink.textContent).toContain('Test section');
    expect(nestedLink.getAttribute('href')).toBe('#test-section');
  });
});
