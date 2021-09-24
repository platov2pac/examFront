import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteredTableComponent } from './entered-table.component';

describe('EnteredTableComponent', () => {
  let component: EnteredTableComponent;
  let fixture: ComponentFixture<EnteredTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteredTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteredTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
