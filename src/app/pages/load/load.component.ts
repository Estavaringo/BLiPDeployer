import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadJson() {

  }
}
