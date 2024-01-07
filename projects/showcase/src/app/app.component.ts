import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardDetailsComponent, UiSdkComponent } from '@my-lib/ui-sdk'; 
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


const PRIME_NG_PROVIDERS = [ConfirmationService, MessageService];
const PRIME_NG_IMPORTS = [ToastModule, ConfirmDialogModule];
const LIB_COMPONENTS = [UiSdkComponent, CardComponent, CardDetailsComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LIB_COMPONENTS, PRIME_NG_IMPORTS],
  providers: [PRIME_NG_PROVIDERS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'showcase';
  isStarModalSelected = false;

  get boolModalStarSelected() {
    return this.isStarModalSelected;
  }

  get dataEpisodes() {
    return  [ { id: 1, name: 'Pilot', air_date: 'December 2, 2013', episode: 'S01E01' },
    { id: 2, name: 'Lawnmower Dog', air_date: 'December 9, 2013', episode: 'S01E02' },
    { id: 3, name: 'Anatomy Park', air_date: 'December 16, 2013', episode: 'S01E03' }
  ];
  }

constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  onDetail() {
    this.confirmationService.confirm({
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Shared',
          detail: 'Your content has been shared',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Closed Details',
          detail: 'Details Closed',
          life: 3000,
        });
      },
    });
  }

  onToggleStar() {
    this.isStarModalSelected = !this.isStarModalSelected;
  }

}