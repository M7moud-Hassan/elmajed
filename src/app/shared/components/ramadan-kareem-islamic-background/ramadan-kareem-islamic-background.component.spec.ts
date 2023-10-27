import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamadanKareemIslamicBackgroundComponent } from './ramadan-kareem-islamic-background.component';

describe('RamadanKareemIslamicBackgroundComponent', () => {
  let component: RamadanKareemIslamicBackgroundComponent;
  let fixture: ComponentFixture<RamadanKareemIslamicBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamadanKareemIslamicBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamadanKareemIslamicBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
