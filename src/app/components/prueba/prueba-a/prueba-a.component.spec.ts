import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAComponent } from './prueba-a.component';

describe('PruebaAComponent', () => {
  let component: PruebaAComponent;
  let fixture: ComponentFixture<PruebaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
