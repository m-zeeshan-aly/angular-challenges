import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterPostComponent } from './twitter-post.component';

describe('TwitterPostComponent', () => {
  let component: TwitterPostComponent;
  let fixture: ComponentFixture<TwitterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
