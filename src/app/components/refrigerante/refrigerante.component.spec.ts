import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeranteComponent } from './refrigerante.component';

describe('RefrigeranteComponent', () => {
  let component: RefrigeranteComponent;
  let fixture: ComponentFixture<RefrigeranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefrigeranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefrigeranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
