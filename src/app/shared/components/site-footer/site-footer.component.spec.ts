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

  it('should link to resume and contact pages', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a')).map((link) => link.textContent?.trim());

    expect(links).toEqual(['Resume', 'Contact']);
  });
});
