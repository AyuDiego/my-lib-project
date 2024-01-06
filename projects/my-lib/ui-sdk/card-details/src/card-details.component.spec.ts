import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card-details.component';
import { ConfirmationService, MessageService } from 'primeng/api';

describe('CardComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardDetailsComponent,CommonModule],
      providers: [ConfirmationService, MessageService],
    });
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggleStar', () => {
    const fixture = TestBed.createComponent(CardDetailsComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.isStarModalSelected).toBe(false);

    app.onToggleStar();
    expect(app.isStarModalSelected).toBe(true);

    app.onToggleStar();
    expect(app.isStarModalSelected).toBe(false);
  });
  it('should return correct status color when isStarModalSelected is true', () => {
    const fixture = TestBed.createComponent(CardDetailsComponent);
    const component = fixture.componentInstance;
    component.isStarModalSelected = true;
    fixture.detectChanges();
  
    const statusColor = component.getStatusColorStart();
  
    expect(statusColor).toBe('#F2994A');
  });
  
  it('should return correct status color when isStarModalSelected is false', () => {
    const fixture = TestBed.createComponent(CardDetailsComponent);
    const component = fixture.componentInstance;
    component.isStarModalSelected = false;
    fixture.detectChanges();
  
    const statusColor = component.getStatusColorStart();
  
    expect(statusColor).toBe('#828282');
  });
});