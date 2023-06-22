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
      id: 1,
      titulo: "Livro 1",
      editora: "Editora 1",
      autor: "Autor 1",
      numPaginas: 100,
      editing: false
    },
    // Resto do array de livros...
  ];

  searchResults: any[] = [];

  autores: string[] = ['Autor 1', 'Autor 2', 'Autor 3', 'Autor 4'];

  constructor() { }

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

  startEditing(book: any) {
    book.editing = true;
  }

  confirmEditing(book: any) {
    book.editing = false;
  }

  cancelEditing(book: any) {
    book.editing = false;
  }
}
