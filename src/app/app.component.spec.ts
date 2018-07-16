import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MatRippleModule } from '@angular/material';
import '../assets/css/deeppurple-amber.css';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent], imports:[MatRippleModule]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  // it('should have a loading property', ()=>{
  //   let fixture = TestBed.createComponent(AppComponent);

  //   expect(fixture.componentInstance.).toBeDefined('should be defined');
  //   expect(fixture.componentInstance.appIsLoading).not.toBeNull('should not be null');
  // })
});
