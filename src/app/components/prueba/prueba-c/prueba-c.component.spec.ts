import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCComponent } from './prueba-c.component';

describe('PruebaCComponent', () => {
  let component: PruebaCComponent;
  let fixture: ComponentFixture<PruebaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
