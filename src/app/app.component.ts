import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  title = 'SUPERSOURCING';

  tiles: Tile[] = [
    // {text: 'app-sidebar', cols: 1, rows: 2, color: 'lightblue'},
    // {text: 'app-main', cols: 3, rows: 2, color: 'lightgreen'},

  ];
}
