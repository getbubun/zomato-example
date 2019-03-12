import { Component, OnInit } from '@angular/core';
import { ZomatoserviceService } from '../zomatoservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  reviewList: any;
  list: any = [];
  cities: any;
  loading: boolean;
  selectedCityName: string ="";
  cityName: string ="";
  restoName: string = "";
  selectedRestoName;
  searchRestoList;

  constructor(private foodservice: ZomatoserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cities = this.foodservice.cities;
    this.getRestoDetail();
  }
  goToDashboard(e, cityName) {
    this.router.navigate(['/dashboard', cityName]);
  }

  async getRestoDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    await this.foodservice.getRestaurantDetail(id).subscribe(
      data => {
        this.reviewList = data;
      },
      error => {
        this.router.navigate(['**']);
      }
    );
    this.foodservice.getReview(id).subscribe(
        data => {
          this.reviewList = Object.assign(data, this.reviewList);
          this.list.push(this.reviewList);
          
        },
        error => {
          this.router.navigate(['**']);
        }
      );
  }


}
