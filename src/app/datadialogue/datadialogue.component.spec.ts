import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadialogueComponent } from './datadialogue.component';

describe('DatadialogueComponent', () => {
  let component: DatadialogueComponent;
  let fixture: ComponentFixture<DatadialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
