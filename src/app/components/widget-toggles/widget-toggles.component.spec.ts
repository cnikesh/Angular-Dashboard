import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTogglesComponent } from './widget-toggles.component';

describe('WidgetTogglesComponent', () => {
  let component: WidgetTogglesComponent;
  let fixture: ComponentFixture<WidgetTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetTogglesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
