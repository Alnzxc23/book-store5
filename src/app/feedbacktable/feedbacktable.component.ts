import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/model/Book";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../services/book/book.service";

@Component({
  selector: 'app-feedbacktable',
  templateUrl: './feedbacktable.component.html',
  styleUrls: ['./feedbacktable.component.css']

})
export class FeedbacktableComponent implements OnInit {

  book!: Book;
  books: Book[] = [];

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.book = bookService.getBookById(params['id']);
    })

  }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }
}

