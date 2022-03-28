import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltLayoutComponent } from './alt-layout.component';

describe('AltLayoutComponent', () => {
  let component: AltLayoutComponent;
  let fixture: ComponentFixture<AltLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
