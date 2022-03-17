import { Component } from '@angular/core';
import { IWinner } from './winner';

const handleItems = (competitions: any[] ) => {
  const result: any[] = [];
  // below create code to manipulate items
  // to get required number of items in requested order
  return []
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';

  winnersList: IWinner[] = [];

  constructor() {
  }

  ngOnInit(): void {
    // task 1. Data are not loading - why?
    fetch('http://ergast.com/api/f1/driverStandings/1.json?limit=300')
      .then(response => response.json())
      .then(data => {
        //inspect data to return proper info
        this.winnersList = handleItems(data.MRData.StandingsTable.StandingsLists)
      })
  }
}
