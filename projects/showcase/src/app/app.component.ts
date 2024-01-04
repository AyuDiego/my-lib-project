import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSdkComponent } from '@my-lib/ui-sdk';
import { CardComponent } from '@my-lib/ui-sdk/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UiSdkComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'showcase';
}
