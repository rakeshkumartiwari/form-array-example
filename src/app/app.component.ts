import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stateList = [
    { id: 101, name: 'Maharashtra' },
    { id: 102, name: 'Telangana' },
    { id: 103, name: 'Odisha' }
  ];

  title = 'form-array-example';
  addressGroup: FormGroup;

  get addresses(): FormArray {
    return this.addressGroup.get('addresses') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addressGroup = this.fb.group({
      addresses: this.fb.array([this.buildAddress()])
    });
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: [null, Validators.maxLength(6)]
    });
  }

  addAddress() {
    this.addresses.push(this.buildAddress());
  }

}

