import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeProjectsComponent } from './office-projects.component';

describe('OfficeProjectsComponent', () => {
  let component: OfficeProjectsComponent;
  let fixture: ComponentFixture<OfficeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
