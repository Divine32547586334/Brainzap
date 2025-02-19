import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterLink, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRouterLink,IonRouterOutlet, IonIcon, IonItem, IonLabel, IonInput, IonButton, RouterLink,]
})
export class LoginPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
