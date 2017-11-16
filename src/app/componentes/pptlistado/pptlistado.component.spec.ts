import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PptlistadoComponent } from './pptlistado.component';

describe('PptlistadoComponent', () => {
  let component: PptlistadoComponent;
  let fixture: ComponentFixture<PptlistadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PptlistadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PptlistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
