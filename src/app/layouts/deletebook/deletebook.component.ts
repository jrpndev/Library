import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  searchText: string = '';
  books: any[] = [];
  searchResults: any[] = [];
  autores: string[] = ['Autor 1', 'Autor 2', 'Autor 3', 'Autor 4'];

  constructor(
    private service: RequestsService,
    private dialog: MatDialog
  ) {}

  loadBooks() {
    this.service.getBooks().subscribe(
      res => {
        this.books = res;
        this.searchResults = this.books;
        this.service.showSnackBar('Livros carregados com sucesso');
      },
      err => {
        this.service.showSnackBar('Erro ao carregar Livros ' + err);
      }
    );
  }

  ngOnInit(): void {
    this.loadBooks();
    this.searchBooks();
  }

  searchBooks() {
    this.searchResults = this.books.filter(book =>
      book.titulo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  deleteBook(book: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Tem certeza que deseja excluir o livro?',
        buttonText: {
          ok: 'Sim',
          cancel: 'Cancelar'
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteBook(book._id);
      }
    });
  }

  startEditing(book: any) {
    book.editing = true;
  }

  confirmEditing(book: any) {
    this.service.editBook(book._id, book);
  }

  cancelEditing(book: any) {
    book.editing = false;
  }
}
