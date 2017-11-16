import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramalistadoComponent } from './anagramalistado.component';

describe('AnagramalistadoComponent', () => {
  let component: AnagramalistadoComponent;
  let fixture: ComponentFixture<AnagramalistadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagramalistadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramalistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
