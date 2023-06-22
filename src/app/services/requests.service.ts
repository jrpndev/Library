import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  url = "http://localhost:3000/livros"

  urlAuthor = "http://localhost:3000/autores"



  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.url).subscribe(res => {
      console.log(res)
    })
  }
  createBooks(book: any) {
    this.http.post(this.url, book).subscribe(res => {
      console.log(res)
    })
  }
  createAuthor(author: any) {
    this.http.post(this.urlAuthor, author).subscribe(res => {
      console.log(res)
    })
  }
  deleteBook(id: any) {
    const url = this.url + "/" + id
    this.http.delete(url).subscribe(res => {
      console.log(res)
    })
  }
  getAuthor() {
    return this.http.get(this.urlAuthor).subscribe(res => {
      console.log(res)
    })
  }
}
