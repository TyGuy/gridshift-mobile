import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from 'src/app/services/api.service';
import { IUserResponse } from 'src/app/interfaces';

interface IUtility {
  name: string;
  id: number;
}

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.page.html',
  styleUrls: ['./home-info.page.scss'],
})
export class HomeInfoPage implements OnInit {


  public utilities: IUtility[] = [
    { name: 'Silicon Valley Clean Energy', id: 100924 },
    { name: 'Peninsula Clean Energy', id: 100774 },
    { name: 'San Jose Clean Energy', id: 101200 },
    { name: 'East Bay Community Energy', id: 101196 },
    { name: 'City of Palo Alto Utilities', id: 744 },
    { name: 'PG&E', id: 734 },
    { name: 'Xcel Energy', id: 913 },
    { name: 'Nevada Energy', id: 531 },
  ];

  public selectedUtility: IUtility = this.utilities[0];
  public selectedUtilityId: number = this.utilities[0].id;
  public email: string;
  public password: string;

  utlitySelected(event: any) {
    // console.log('utility selected!');
    const id = event.detail.value;
    this.selectedUtility = this.utilities.find((ut) => ut.id === id);

    // console.log(this.selectedUtility)
  }

  onSubmit() {
    const authData = {
      username: this.email,
      password: this.password,
      lse_id: this.selectedUtility.id.toString(),
    };

    this.dataService.authData = authData;

    this.apiService.auth(authData).subscribe((userData: IUserResponse) => {
      this.dataService.user = userData;
      this.router.navigate(['/savings-prefs']);
    });
  }

  constructor(
    private router: Router,
    private dataService: DataService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }
}
