import { Component } from '@angular/core';

@Component({
  selector: 'app-get-author',
  templateUrl: './get-author.component.html',
  styleUrls: ['./get-author.component.css']
})
export class GetAuthorComponent {
  searchText: string = '';

  dataSource: any[] = [
    { id: 1, nome: 'Autor 1', nacionalidade: 'Nacionalidade 1', editing: false },
    { id: 2, nome: 'Autor 2', nacionalidade: 'Nacionalidade 2', editing: false },
    { id: 3, nome: 'Autor 3', nacionalidade: 'Nacionalidade 3', editing: false }
  ];

  searchAuthors() {
    if (this.searchText === '') {
      this.dataSource = [
        { id: 1, nome: 'Autor 1', nacionalidade: 'Nacionalidade 1', editing: false },
        { id: 2, nome: 'Autor 2', nacionalidade: 'Nacionalidade 2', editing: false },
        { id: 3, nome: 'Autor 3', nacionalidade: 'Nacionalidade 3', editing: false }
      ];
    } else {
      this.dataSource = this.dataSource.filter(author => author.nome.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }

  deleteAuthor(author: any) {
    // Implemente a lógica de exclusão do autor aqui
  }

  startEditing(author: any) {
    author.editing = true;
  }

  confirmEditing(author: any) {
    author.editing = false;
  }

  cancelEditing(author: any) {
    author.editing = false;
  }
}
