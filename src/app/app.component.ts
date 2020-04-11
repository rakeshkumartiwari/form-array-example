import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addressGroup = this.fb.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: [null, Validators.maxLength(6)]
    });
  }

}

