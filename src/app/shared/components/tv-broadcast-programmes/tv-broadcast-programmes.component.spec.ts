import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvBroadcastProgrammesComponent } from './tv-broadcast-programmes.component';

describe('TvBroadcastProgrammesComponent', () => {
  let component: TvBroadcastProgrammesComponent;
  let fixture: ComponentFixture<TvBroadcastProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvBroadcastProgrammesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvBroadcastProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
