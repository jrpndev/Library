import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  url = "http://localhost:3000/livros"
  urlAuthor = "http://localhost:3000/autores"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getBooks() {
    return this.http.get(this.url).subscribe(res => {
      console.log(res);
      this.showSnackBar('Consulta de livros bem-sucedida');
    }, error => {
      console.error(error);
      this.showSnackBar('Erro na consulta de livros');
    });
  }

  createBooks(book: any) {
    this.http.post(this.url, book).subscribe(res => {
      console.log(res);
      this.showSnackBar('Livro criado com sucesso');
    }, error => {
      console.error(error);
      this.showSnackBar('Erro ao criar livro');
    });
  }

  createAuthor(author: any) {
    this.http.post(this.urlAuthor, author).subscribe(res => {
      console.log(res);
      this.showSnackBar('Autor criado com sucesso');
    }, error => {
      console.error(error);
      this.showSnackBar('Erro ao criar autor');
    });
  }

  deleteBook(id: any) {
    const url = this.url + "/" + id;
    this.http.delete(url).subscribe(res => {
      console.log(res);
      this.showSnackBar('Livro excluído com sucesso');
    }, error => {
      console.error(error);
      this.showSnackBar('Erro ao excluir livro');
    });
  }

  getAuthor() {
    return this.http.get(this.urlAuthor).subscribe(res => {
      console.log(res);
      this.showSnackBar('Consulta de autores bem-sucedida');
    }, error => {
      console.error(error);
      this.showSnackBar('Erro na consulta de autores');
    });
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 3000 });
  }
}
