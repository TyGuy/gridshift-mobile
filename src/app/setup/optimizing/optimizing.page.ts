import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optimizing',
  templateUrl: './optimizing.page.html',
  styleUrls: ['./optimizing.page.scss'],
})
export class OptimizingPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(['/done']);
    }, 8000);
  }
}
