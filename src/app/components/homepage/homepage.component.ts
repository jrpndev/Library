import { Component, Type } from '@angular/core';
import { AddbookComponent } from 'src/app/layouts/addbook/addbook.component';
import { GetBookComponent} from '../../layouts/get-book/get-book.component'
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
        this.componenteAtual
        break;
      case 'Componente4':
        this.componenteAtual
        break;
    }
  }
}