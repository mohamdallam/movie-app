import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAppComponent } from './movie-app.component';

describe('MovieAppComponent', () => {
  let component: MovieAppComponent;
  let fixture: ComponentFixture<MovieAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieAppComponent]
    });
    fixture = TestBed.createComponent(MovieAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
