import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgLibraryComponent } from './dg-library.component';

describe('DgLibraryComponent', () => {
  let component: DgLibraryComponent;
  let fixture: ComponentFixture<DgLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
