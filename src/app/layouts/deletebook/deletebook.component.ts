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
  autores: any[] = []; // Alteração: Altere o tipo do array para any[]

  constructor(
    private service: RequestsService,
    private dialog: MatDialog
  ) { }

  loadBooks() {
    this.service.getBooks().subscribe(
      res => {
        this.books = res;
        this.books.forEach(book => {
          book.autor = book.autor._id; // Adicione esta linha para definir o valor correto de book.autor
        });
        this.searchResults = this.books;
        this.service.showSnackBar('Livros carregados com sucesso');
      },
      err => {
        this.service.showSnackBar('Erro ao carregar Livros ' + err);
      }
    );
  }
  

  loadAuthors() {
    this.service.getAuthor().subscribe(
      res => {
        this.autores = res; // Alteração: Atribua o resultado diretamente ao array autores
      },
      error => {
        this.service.showSnackBar('Erro ao carregar autores ' + error);
      }
    );
  }

  ngOnInit(): void {
    this.loadBooks();
    this.searchBooks();
    this.loadAuthors();
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
