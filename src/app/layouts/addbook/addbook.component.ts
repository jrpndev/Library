import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  livroForm: FormGroup;
  autores: string[] = ['Autor 1', 'Autor 2', 'Autor 3']; // Array de autores para o select option
  livro = {
    nome: "",
    autor: {
      nome: "",
      nacionalidade: "",
    },
    editora: "",
    numPaginas: 0
  }

  constructor() {
    this.livroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      editora: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      numPaginas: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  submitForm() {
    if (this.livroForm.valid) {
      // Lógica para enviar o formulário
      console.log(this.livroForm.value);
    } else {
      // Exibir mensagens de erro ou fazer outras ações
    }
  }
}