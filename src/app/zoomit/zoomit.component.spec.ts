import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomitComponent } from './zoomit.component';

describe('ZoomitComponent', () => {
  let component: ZoomitComponent;
  let fixture: ComponentFixture<ZoomitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
