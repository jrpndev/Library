import { Component } from '@angular/core';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent {
  pessoa = {
    nacionalidade: '',
    nome: ''
  };

  submitForm() {
    // Lógica para enviar o formulário
  }
}
