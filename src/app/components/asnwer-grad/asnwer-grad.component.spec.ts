import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnwerGradComponent } from './asnwer-grad.component';

describe('AsnwerGradComponent', () => {
  let component: AsnwerGradComponent;
  let fixture: ComponentFixture<AsnwerGradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsnwerGradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnwerGradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
