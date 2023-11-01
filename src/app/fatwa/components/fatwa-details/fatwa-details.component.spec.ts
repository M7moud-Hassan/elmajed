import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwaDetailsComponent } from './fatwa-details.component';

describe('FatwaDetailsComponent', () => {
  let component: FatwaDetailsComponent;
  let fixture: ComponentFixture<FatwaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatwaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
