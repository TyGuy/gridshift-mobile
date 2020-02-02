import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonReorderGroup } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savings-prefs',
  templateUrl: './savings-prefs.page.html',
  styleUrls: ['./savings-prefs.page.scss'],
})
export class SavingsPrefsPage implements OnInit {
  @ViewChild(IonReorderGroup, { static: false }) reorderGroup: IonReorderGroup;
  // data: any;

  // preferences = ['Cheap', 'Clean', 'Control'];
  preferences = this.dataService.preferences

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private router: Router,
  ) {
    console.log(this.dataService.authData);
    console.log('--------------------------');
    console.log(this.dataService.user);
  }

  ngOnInit() {}

  doReorder(event: any) {
    console.log('Before complete', this.preferences);

    this.preferences = event.detail.complete(this.preferences);
    console.log('After complete', this.preferences);

    this.dataService.preferences = this.preferences;
  }

  onSubmit() {
    this.router.navigate(['/optimizing']);

    this.apiService.requestTimesAndRates(this.dataService.optimizationRequestData)
      .subscribe((optimizationData) => {
        this.dataService.optimizationData = optimizationData;
      });
  }
}
