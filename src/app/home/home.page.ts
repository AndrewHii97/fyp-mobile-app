import { Component } from '@angular/core';
import { ResidentService } from '../services/resident.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public username: string;
  public password: string;

  constructor(private residentService: ResidentService) {}

  public submitLogIn(){
     console.log("submitValue");
  }

  public goToRegistration(){
    console.log("go to registration")
  }

}
