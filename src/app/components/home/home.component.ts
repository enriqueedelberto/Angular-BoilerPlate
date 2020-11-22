import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../models/NavItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fillerNav: Array<NavItem> = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fillerNav = [
      {
        title: 'CRUD',
        icon: 'home',
        path: '/crud'
      }
    ];
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }

}
