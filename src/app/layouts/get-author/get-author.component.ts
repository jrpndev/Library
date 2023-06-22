import { Component } from '@angular/core';

@Component({
  selector: 'app-get-author',
  templateUrl: './get-author.component.html',
  styleUrls: ['./get-author.component.css']
})
export class GetAuthorComponent {
  dataSource: any[] = [
    { id: 1, nome: 'Autor 1', nacionalidade: 'Nacionalidade 1' },
    { id: 2, nome: 'Autor 2', nacionalidade: 'Nacionalidade 2' },
    { id: 3, nome: 'Autor 3', nacionalidade: 'Nacionalidade 3' }
  ];
}
