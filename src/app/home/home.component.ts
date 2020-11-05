import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }

}
