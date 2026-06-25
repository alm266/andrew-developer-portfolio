import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contact option links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.contact-details__actions .button'));

    expect(links.map((link) => link.textContent?.trim())).toEqual(['Email Me', 'GitHub', 'LinkedIn']);
    expect(links.map((link) => link.href)).toEqual([
      'mailto:andrewleonmarshall@gmail.com',
      'https://github.com/alm266',
      'https://www.linkedin.com/in/andrewleonmarshall',
    ]);
  });
});
