import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  searchText: string = '';

  books = [
    {
      titulo: "Livro 1",
      editora: "Editora 1",
      autor: "Autor 1",
      numPaginas: 100
    },
    {
      titulo: "Livro 2",
      editora: "Editora 2",
      autor: "Autor 2",
      numPaginas: 200
    },
    {
      titulo: "Livro 3",
      editora: "Editora 3",
      autor: "Autor 3",
      numPaginas: 300
    },
    {
      titulo: "Livro 4",
      editora: "Editora 4",
      autor: "Autor 4",
      numPaginas: 400
    }
  ];

  searchResults: any[] = [];

  autores: string[] = ['Autor 1', 'Autor 2', 'Autor 3', 'Autor 4'];

  constructor() {}

  ngOnInit(): void {
    this.searchBooks();
  }

  searchBooks() {
    this.searchResults = this.books.filter(book =>
      book.titulo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
  }
  editBook(id : any){

  }
}
