import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovomeioPage } from './novomeio.page';

describe('NovomeioPage', () => {
  let component: NovomeioPage;
  let fixture: ComponentFixture<NovomeioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovomeioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovomeioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
