import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidrariaPage } from './vidraria.page';

describe('VidrariaPage', () => {
  let component: VidrariaPage;
  let fixture: ComponentFixture<VidrariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidrariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidrariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
