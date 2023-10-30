import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureAndResearchComponent } from './literature-and-research.component';

describe('LiteratureAndResearchComponent', () => {
  let component: LiteratureAndResearchComponent;
  let fixture: ComponentFixture<LiteratureAndResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteratureAndResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteratureAndResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
