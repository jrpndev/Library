import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { RequestsService } from 'src/app/services/requests.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-get-author',
  templateUrl: './get-author.component.html',
  styleUrls: ['./get-author.component.css']
})
export class GetAuthorComponent implements OnInit {
  searchText: string = '';

  constructor(private service: RequestsService, private dialog: MatDialog) { }

  dataSource: author[] = [];

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
    this.service.getAuthor().subscribe(
      res => {
        this.dataSource = res;
        console.log(res);
        this.service.showSnackBar('Consulta de autores bem-sucedida');
      },
      error => {
        this.service.showSnackBar('Erro na consulta de autores' + error);
      }
    );
  }

  searchAuthors() {
    if (this.searchText === '') {
      this.dataSource = this.dataSource;
    } else {
      this.dataSource = this.dataSource.filter(author => author.nome.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }

  deleteAuthor(author: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        message: 'Deseja realmente excluir o autor?',
        confirmText: 'Excluir'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteAuthor(author._id);
      }
    });
  }

  startEditing(author: any) {
    author.editing = true;
  }

  confirmEditing(author: any) {
    this.service.editAuthor(author._id , author);
  }

  cancelEditing(author: any) {
    author.editing = false;
  }
}
