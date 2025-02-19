import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Import the IonicModule

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // Use IonicModule here to include all necessary Ionic components
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
