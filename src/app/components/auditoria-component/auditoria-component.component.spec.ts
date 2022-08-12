import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaComponentComponent } from './auditoria-component.component';

describe('AuditoriaComponentComponent', () => {
  let component: AuditoriaComponentComponent;
  let fixture: ComponentFixture<AuditoriaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
