import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMusiquesComponent } from './liste-musiques.component';

describe('ListeMusiquesComponent', () => {
  let component: ListeMusiquesComponent;
  let fixture: ComponentFixture<ListeMusiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMusiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMusiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
