import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createBook() {
    this.bookService.create(this.book).subscribe(() => {
      console.log('ok');
    });
  }

}
