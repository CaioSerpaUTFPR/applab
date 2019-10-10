import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoequipPage } from './novoequip.page';

describe('NovoequipPage', () => {
  let component: NovoequipPage;
  let fixture: ComponentFixture<NovoequipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoequipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoequipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
