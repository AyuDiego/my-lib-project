import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardComponent } from 'dist/my-lib/ui-sdk/card';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

// import { UiSdkComponent } from 'dist/my-lib/ui-sdk';
const PRIME_NG_IMPORTS = [ToastModule, ConfirmDialogModule];

@Component({
  selector: 'lib-card-details',
  standalone: true,
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
  imports: [CommonModule, CardComponent, PRIME_NG_IMPORTS],
})
export class CardDetailsComponent {
  @Input()
  isStarModalSelected = false;
  @Input() 
  alive: boolean = true;
  @Input()
  urlProfile: string = '';
  @Input()
  ifToast: boolean = true;
  @Input()
  status: string = '';
  @Input()
  name: string = '';
  @Input()
  species: string = '';
  @Input()
  gender: string = '';
  @Input()
  originName: string = '';
  @Input()
  type: string = '';
  @Input()
  dataEpisodeSelected: any[] = [];
  @Input()
  pathImgRecommended: string = '';

  @Output()
  toggleStarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  onToggleStar() {
    this.isStarModalSelected = !this.isStarModalSelected;
    this.toggleStarEmitter.emit(this.isStarModalSelected); 
  }

  getStatusColorStart() {
    return this.isStarModalSelected ? '#F2994A' : '#828282';
  }
}
