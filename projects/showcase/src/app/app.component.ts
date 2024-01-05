import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSdkComponent } from '@my-lib/ui-sdk';
import { CardComponent } from '@my-lib/ui-sdk/card';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


const PRIME_NG_PROVIDERS = [ConfirmationService, MessageService];
const PRIME_NG_IMPORTS = [ToastModule, ConfirmDialogModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  UiSdkComponent, CardComponent, PRIME_NG_IMPORTS],
  providers: [PRIME_NG_PROVIDERS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'showcase';
constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
  onDetail() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
  });
  }
}
