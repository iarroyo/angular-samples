import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADesktopComponent } from './a.component';

describe('AComponent', () => {
  let component: ADesktopComponent;
  let fixture: ComponentFixture<ADesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
