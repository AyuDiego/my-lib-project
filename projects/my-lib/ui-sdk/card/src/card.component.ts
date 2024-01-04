import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  status = 'Alive - Human';
  @Input()
  name = 'Morty Smith';
  @Input()
  lastLocation = 'Story Train';
  @Input()
  firstSeen = 'Never Ricking Morty';
  @Input() 
  pathImage = '';

  @Input() alive: boolean = true;
  
  @Input() 
  isStarSelected: boolean = false;

  toggleStar() {
    this.isStarSelected = !this.isStarSelected;
  }

  getStatusColor() {
    return this.alive ? '#27ae60' : '#e74c3c';
  }
}
