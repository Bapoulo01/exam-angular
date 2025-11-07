import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appro } from './appro';

describe('Appro', () => {
  let component: Appro;
  let fixture: ComponentFixture<Appro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
