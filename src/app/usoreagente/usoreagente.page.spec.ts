import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoreagentePage } from './usoreagente.page';

describe('UsoreagentePage', () => {
  let component: UsoreagentePage;
  let fixture: ComponentFixture<UsoreagentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoreagentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoreagentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
