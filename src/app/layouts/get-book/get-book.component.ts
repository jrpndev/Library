import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  editora: string;
}

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})

export class GetBookComponent {
  colunas: string[] = ['id', 'titulo', 'autor', 'editora'];
  livrosDataSource = [
    { id: 1, titulo: 'Livro 1', autor: 'Autor 1', editora: 'Editora 1' },
    { id: 2, titulo: 'Livro 2', autor: 'Autor 2', editora: 'Editora 2' },
    { id: 3, titulo: 'Livro 3', autor: 'Autor 3', editora: 'Editora 3' },
    // Adicione mais livros conforme necessári
  ]
}