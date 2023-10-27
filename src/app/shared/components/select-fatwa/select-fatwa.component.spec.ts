import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFatwaComponent } from './select-fatwa.component';

describe('SelectFatwaComponent', () => {
  let component: SelectFatwaComponent;
  let fixture: ComponentFixture<SelectFatwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFatwaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFatwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
