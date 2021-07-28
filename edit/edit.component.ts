import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  updateBook(id){
    this.bookService.updateById(id, this.book).subscribe(() => console.log('ok'));
  }
}
