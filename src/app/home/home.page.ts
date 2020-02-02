import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    public alertController: AlertController,
  ) {}

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
