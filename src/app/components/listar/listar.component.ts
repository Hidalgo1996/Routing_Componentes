//Imports
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  
})
export class ListarComponent {
  displayedColumns: string[] = ['position', 'nombre', 'altura', 'edad'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  nombre: string;
  altura: number;
  edad: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Jorge', altura: 1.60, edad: '26'},
  {position: 2, nombre: 'Andres', altura: 1.66, edad: '32'},
  {position: 3, nombre: 'Ester', altura: 1.94, edad: '22'},
  {position: 4, nombre: 'Maria', altura: 1.40, edad: '56'},
  {position: 5, nombre: 'Jose', altura: 1.80, edad: '25'},
  {position: 6, nombre: 'Carlos', altura: 1.70, edad: '12'},
  {position: 7, nombre: 'Jhon', altura: 1.67, edad: '26'},
  {position: 8, nombre: 'Alex', altura: 1.90, edad: '39'},
  {position: 9, nombre: 'Kevin', altura: 1.90, edad: '70'},
  {position: 10, nombre: 'Joel', altura: 1.80, edad: '50'},
  {position: 11, nombre: 'Jesus', altura: 1.60, edad: '60'},
  {position: 12, nombre: 'Ana', altura: 1.40, edad: '45'},
  {position: 13, nombre: 'Lucia', altura: 1.50, edad: '35'},
  {position: 14, nombre: 'Fredy', altura: 1.85, edad: '16'},
  {position: 15, nombre: 'Favian', altura: 1.97, edad: '18'},
  {position: 16, nombre: 'Sol', altura: 1.20, edad: '36'},
  {position: 17, nombre: 'Angel', altura: 1.45, edad: '34'},
  {position: 18, nombre: 'Miguel', altura: 1.94, edad: '39'},
  {position: 19, nombre: 'Raul', altura: 1.83, edad: '40'},
  {position: 20, nombre: 'Joaquin', altura: 1.78, edad: '46'},
];