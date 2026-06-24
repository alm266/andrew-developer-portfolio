import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SiteFooterComponent } from './site-footer.component';

describe('SiteFooterComponent', () => {
  let component: SiteFooterComponent;
  let fixture: ComponentFixture<SiteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SiteFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the copyright notice', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(`© ${component.currentYear} Andrew Marshall`);
  });

  it('should link to footer pages', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('.site-footer__nav a')).map((link) => link.textContent?.trim());

    expect(links).toEqual(['About', 'Resume', 'Contact']);
  });

  it('should render social links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.site-footer__social-link'));

    expect(links.map((link) => link.getAttribute('aria-label'))).toEqual(['Email', 'GitHub', 'LinkedIn']);
    expect(links.map((link) => link.href)).toEqual([
      'mailto:andrewleonmarshall@gmail.com',
      'https://github.com/alm266',
      'https://www.linkedin.com/in/andrewleonmarshall',
    ]);
  });
});
