import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificadanoPage } from './notificadano.page';

describe('NotificadanoPage', () => {
  let component: NotificadanoPage;
  let fixture: ComponentFixture<NotificadanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificadanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificadanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
