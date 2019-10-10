import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoreagPage } from './novoreag.page';

describe('NovoreagPage', () => {
  let component: NovoreagPage;
  let fixture: ComponentFixture<NovoreagPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoreagPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoreagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
