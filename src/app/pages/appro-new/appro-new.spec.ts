import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproNew } from './appro-new';

describe('ApproNew', () => {
  let component: ApproNew;
  let fixture: ComponentFixture<ApproNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
