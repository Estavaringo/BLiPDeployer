import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { AddBotComponent } from '../add-bot/add-bot.component';

export interface Chatbot {
  name: string;
  description: string;
  action: string;
}

const ELEMENT_DATA: Chatbot[] = [
  {name: 'Claro Wpp', description: 'Bot principal Claro Whatsapp', action: ''},
  {name: 'Claro Faturamento Residencial', description: 'Emissão de faturas Claro Residencial', action: ''},
  {name: 'Claro TV', description: 'Menus Claro TV', action: ''}
];

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddBotDialog(): void {
    const dialogRef = this.dialog.open(AddBotComponent, {
      width: `${0.5 * window.innerWidth}px`,
      data: ELEMENT_DATA,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}


