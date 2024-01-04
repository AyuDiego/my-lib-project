import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle star selection', () => {
    expect(component.isStarSelected).toBe(false);

    component.toggleStar();
    expect(component.isStarSelected).toBe(true);

    component.toggleStar();
    expect(component.isStarSelected).toBe(false);
  });

  it('should set status color based on alive property', () => {
    component.alive = true;
    expect(component.getStatusColor()).toBe('#27ae60');

    component.alive = false;
    expect(component.getStatusColor()).toBe('#e74c3c');
  });
});