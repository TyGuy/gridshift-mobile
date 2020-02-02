import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    public alertController: AlertController,
    private dataService: DataService,
  ) {}

  get runHoursToday(): string {
    return this.dataService.runHoursToday;
  }

  get expectedSavingsToday(): number {
    return Math.round(this.dataService.expectedSavingsToday * 100) / 100;
  }

  get expectedMitigationToday(): number {
    const kgCo2 = this.dataService.expectedMitigationToday;
    return Math.round(kgCo2 * 16.75 * 10) / 10;
  }

  get plannedUsage(): number {
    return this.dataService.plannedUsage;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Charging now!',
      subHeader: '',
      message: 'We have overridden your schedule and started your charging.',
      buttons: ['OK']
    });

    await alert.present();
  }

  preferencesClicked() {
    this.router.navigate(['/savings-prefs']);
  }
}
