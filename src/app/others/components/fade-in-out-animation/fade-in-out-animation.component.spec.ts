import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInOutAnimationComponent } from './fade-in-out-animation.component';

describe('FadeInOutAnimationComponent', () => {
  let component: FadeInOutAnimationComponent;
  let fixture: ComponentFixture<FadeInOutAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeInOutAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FadeInOutAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
