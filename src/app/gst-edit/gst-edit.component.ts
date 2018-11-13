import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';


@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})


export class GstEditComponent implements OnInit {

  gst_editForm;
  business: any = {};

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private bs: BusinessService, private fb: FormBuilder) { this.createForm(); }

  createForm() {
    this.gst_editForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }

  updateBusiness(person_name, business_name, business_gst_number) {
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(person_name, business_name, business_gst_number, params['id']);
      this.router.navigate(['business']);
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }
}
