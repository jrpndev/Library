import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { author } from 'src/app/models/author.model';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  livroForm: FormGroup;
  autores: author[] = [];
  livro = {
    titulo: "",
    autor: {
      _id : "",
      nome : "",
      nacionalidade : "",
    },
    editora: "",
    numPaginas: 0
  };

  constructor(private service: RequestsService) {
    this.livroForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      editora: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      numPaginas: new FormControl('',Validators.required)
    });
  }

  loadAuthors() {
    this.service.getAuthor().subscribe(res => this.autores = res);
  }

  ngOnInit(): void {
    this.loadAuthors();
  }

  submitForm() {
    if (this.livroForm.valid) {
      const autorSelecionado = this.livroForm.get('autor')?.value;
      this.livro = {
        ...this.livro,
        autor: {
          _id : autorSelecionado._id,
          nome : autorSelecionado.nome,
          nacionalidade: autorSelecionado.nacionalidade
        },
        titulo: this.livroForm.get('titulo')?.value,
        editora: this.livroForm.get('editora')?.value,
        numPaginas: this.livroForm.get('numPaginas')?.value
      };
      this.service.createBooks(this.livro);
    }
  }
}
