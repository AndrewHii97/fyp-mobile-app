import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResidentService } from '../services/resident.service';
import { HousingUnitService } from '../services/housing-unit.service';
import { House } from '../interfaces/house';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  units : House[];
  residentForm : FormGroup;
  imgUri

  constructor(
    private residentService: ResidentService,
    private fb: FormBuilder,
    private testService: TestService){}

  ngOnInit() {
    this.residentForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      icno: ['', { validators: [Validators.required], asyncValidators:[this.testService.icNoValidation]}],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      username: ['',{ validators: [Validators.required], asyncValidators: [this.testService.userNameValidation]}],
      password: ['',Validators.required],
      livingunit : ['',Validators.required],
      image: [null, Validators.required]
    })
  }



}
