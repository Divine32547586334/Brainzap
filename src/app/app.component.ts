import { Component } from '@angular/core';
import { IonApp, IonRouterLink, IonRouterOutlet } from '@ionic/angular/standalone';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,IonRouterLink],
})
export class AppComponent {
  constructor() {}
}
