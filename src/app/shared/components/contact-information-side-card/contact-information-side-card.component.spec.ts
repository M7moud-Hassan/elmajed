import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationSideCardComponent } from './contact-information-side-card.component';

describe('ContactInformationSideCardComponent', () => {
  let component: ContactInformationSideCardComponent;
  let fixture: ComponentFixture<ContactInformationSideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInformationSideCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformationSideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
