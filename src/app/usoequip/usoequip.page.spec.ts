import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoequipPage } from './usoequip.page';

describe('UsoequipPage', () => {
  let component: UsoequipPage;
  let fixture: ComponentFixture<UsoequipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoequipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoequipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
