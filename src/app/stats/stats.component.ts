import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  
  getXWinCount() {
    if (localStorage.getItem('x') == null) {
      return 0;
    } else {
      return localStorage.getItem('x');
    }
  }

  getOWinCount() {
    if (localStorage.getItem('o') == null) {
      return 0;
    } else {
      return localStorage.getItem('o');
    }
  }

  getMatchTieCount() {
    if (localStorage.getItem('tie') == null) {
      return 0;
    } else {
      return localStorage.getItem('tie');
    }
  }
}
