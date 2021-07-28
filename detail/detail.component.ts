import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getById(id);
    });
  }

  getById(id) {
    this.bookService.getById(id).subscribe(book => {
      this.book = book;
    });
  }
}
