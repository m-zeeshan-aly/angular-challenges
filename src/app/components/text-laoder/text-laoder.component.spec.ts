import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLaoderComponent } from './text-laoder.component';

describe('TextLaoderComponent', () => {
  let component: TextLaoderComponent;
  let fixture: ComponentFixture<TextLaoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextLaoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextLaoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
