import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  classe: string = 'blue';
  isBlue: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  trocarTema() {
    this.classe = this.isBlue ? 'black' : 'blue';

    this.isBlue = !this.isBlue;
  }
}
