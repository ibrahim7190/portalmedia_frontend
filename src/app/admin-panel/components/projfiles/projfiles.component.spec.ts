import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjfilesComponent } from './projfiles.component';

describe('ProjfilesComponent', () => {
  let component: ProjfilesComponent;
  let fixture: ComponentFixture<ProjfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
