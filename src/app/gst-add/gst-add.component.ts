import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {
  dataadded = false;
  msg: String ;
  gst_addForm;
  constructor(private fb: FormBuilder , private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.gst_addForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  addBusiness (person_name, business_name, business_gst_number) {
  this.bs.addBusiness(person_name, business_name, business_gst_number);
  location.reload();
  this.dataadded = true;
  this.msg = 'Data Added successfully';
  }

  ngOnInit() {
  }

}
