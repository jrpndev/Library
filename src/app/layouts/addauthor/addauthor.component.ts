import { Component } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent {

  constructor(private service : RequestsService){}
  autor = {
    "nacionalidade": '',
    "nome": ''
  };

  submitForm() {
    this.service.createAuthor(this.autor);
    console.log(this.autor)
  }
}
