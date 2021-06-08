import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialControlsFormComponent } from './material-controls-form.component';

describe('MaterialControlsFormComponent', () => {
  let component: MaterialControlsFormComponent;
  let fixture: ComponentFixture<MaterialControlsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialControlsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialControlsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
