import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(books => this.books = books);
  }

  deleteById(id, i) {
    this.bookService.deleteById(id).subscribe(() => {
      this.books.splice(i, 1);
    });
  }
}
