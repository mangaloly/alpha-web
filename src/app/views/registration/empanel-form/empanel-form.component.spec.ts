import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanelFormComponent } from './empanel-form.component';

describe('EmpanelFormComponent', () => {
  let component: EmpanelFormComponent;
  let fixture: ComponentFixture<EmpanelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpanelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpanelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
