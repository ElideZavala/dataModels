import { Component, OnInit } from '@angular/core';
import { LIBROS } from '../mocks';
import { Libro } from '../libro.model';

@Component({
  selector: 'Biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.sass']
})
export class BibliotecaComponent implements OnInit {
  libros: Libro[];

  constructor() { }

  ngOnInit(): void {
    this.libros = LIBROS;
  }

}
