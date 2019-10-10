import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanosPage } from './danos.page';

describe('DanosPage', () => {
  let component: DanosPage;
  let fixture: ComponentFixture<DanosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
