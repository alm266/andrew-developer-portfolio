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
    component.items = [{ id: 'test-article', title: 'Test article' }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
