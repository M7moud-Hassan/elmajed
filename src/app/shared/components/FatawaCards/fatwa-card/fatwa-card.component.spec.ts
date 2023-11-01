import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwaCardComponent } from './fatwa-card.component';

describe('FatwaCardComponent', () => {
  let component: FatwaCardComponent;
  let fixture: ComponentFixture<FatwaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatwaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
