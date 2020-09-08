import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBeersComponent } from './list-of-beers.component';

describe('ListOfBeersComponent', () => {
  let component: ListOfBeersComponent;
  let fixture: ComponentFixture<ListOfBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
