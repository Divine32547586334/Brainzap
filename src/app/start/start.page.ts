import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink, IonRouterOutlet, RouterLink],
})
export class StartPage {
  
  constructor() {}
}
