import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { author } from '../models/author.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  url = "http://localhost:3000/livros"
  urlAuthor = "http://localhost:3000/autores"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getBooks() : Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  createBooks(book: any) {
    this.http.post(this.url, book).subscribe(res => {
      this.showSnackBar('Livro criado com sucesso');
    }, error => {
      this.showSnackBar('Erro ao criar livro' + error);
    });
  }

  createAuthor(author: any) {
    this.http.post(this.urlAuthor, author).subscribe(res => {
      console.log(res);
      this.showSnackBar('Autor criado com sucesso');
    }, error => {
      this.showSnackBar('Erro ao criar autor' + error);
    });
  }

  deleteBook(id : any) {
    const url = this.url + "/" + id;
    this.http.delete(url).subscribe(res => {
      console.log(res);
      this.showSnackBar('Livro excluído com sucesso');
    }, error => {
      this.showSnackBar('Erro ao excluir livro ' + error);
    });
  }

  editAuthor(id : any , author : any){
    const url = this.urlAuthor + "/" + id;
    this.http.put(url , author).subscribe(res=>{
      console.log(res);
      this.showSnackBar('Autor atualizado com sucesso!');
    } , error=>{
      console.log(error);
      this.showSnackBar('Erro ao atualizar Autor' + error);
    })
  }

  editBook(id : any , book : any){
    const url = this.url + "/" + id;
    this.http.put(url , book).subscribe(res=>{
      this.showSnackBar('Livro atualizado com sucesso!');
    } , error=>{
      this.showSnackBar('Erro ao atualizar Livro ' + error);
    })

  }

  deleteAuthor(id: any) {
    const url = this.urlAuthor + "/" + id;
    this.http.delete(url).subscribe(res => {
      this.showSnackBar('Autor excluído com sucesso');
    }, error => {
      this.showSnackBar('Erro ao excluir Autor ' + error);
    });
  }

  getAuthor(): Observable<author[]> {
    return this.http.get<author[]>(this.urlAuthor);
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 3000 });
  }
}
