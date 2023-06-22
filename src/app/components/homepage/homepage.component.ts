import { Component, Type } from '@angular/core';
import { AddbookComponent } from 'src/app/layouts/addbook/addbook.component';
import { GetBookComponent } from '../../layouts/get-book/get-book.component'
import { AddauthorComponent } from 'src/app/layouts/addauthor/addauthor.component';
import { DeletebookComponent } from 'src/app/layouts/deletebook/deletebook.component';
import { GetAuthorComponent } from 'src/app/layouts/get-author/get-author.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  componenteAtual!: Type<any>;

  carregarComponente(componente: string): void {
    switch (componente) {
      case 'Componente1':
        this.componenteAtual = AddbookComponent;
        break;
      case 'Componente2':
        this.componenteAtual = GetBookComponent;
        break;
      case 'Componente3':
        this.componenteAtual = DeletebookComponent
        break;
      case 'Componente4':
        this.componenteAtual = AddauthorComponent
        break;
      case 'Componente5':
        this.componenteAtual = GetAuthorComponent;
        break;
    }
  }
}