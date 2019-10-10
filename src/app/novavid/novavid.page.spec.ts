import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovavidPage } from './novavid.page';

describe('NovavidPage', () => {
  let component: NovavidPage;
  let fixture: ComponentFixture<NovavidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovavidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovavidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
