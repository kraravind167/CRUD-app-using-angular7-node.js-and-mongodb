import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../Business_model';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  businesses: Business[];
  constructor(private bs: BusinessService) { }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
      this.ngOnInit();
    });
  }

  refresh() {
    location.reload();
  }
  ngOnInit() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

}
