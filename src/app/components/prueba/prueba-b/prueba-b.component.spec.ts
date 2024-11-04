import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaBComponent } from './prueba-b.component';

describe('PruebaBComponent', () => {
  let component: PruebaBComponent;
  let fixture: ComponentFixture<PruebaBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
