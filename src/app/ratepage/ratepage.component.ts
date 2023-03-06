import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/model/Book";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../services/book/book.service";
import {FormGroup, FormControl, FormArray} from '@angular/forms'
import {Rating} from "../shared/model/Rating";

@Component({
  selector: 'app-ratepage',
  templateUrl: './ratepage.component.html',
  styleUrls: ['./ratepage.component.css']
})

export class RatepageComponent implements OnInit {
  book!: Book;
  fullfeedbackControl: FormGroup;
  feedbackControl: FormControl;
  feedbakerList: FormGroup;

  private bs: BookService;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
    this.bs = bookService;

    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.book = bookService.getBookById(params['id']);
    })

  }

  addfeedback() {
    (this.feedbakerList.controls['feedbacker'] as FormArray).push(new FormControl(''));
    if (!this.book.ratings) {
      this.book.ratings = []
    }
    let rating = new Rating();
    rating.stars = 5;
    rating.description = "very good";
    this.book.ratings.push(rating);
    this.bs.updateBook(this.book);
  }

  ngOnInit(): void {
    this.feedbackControl = new FormControl('Топовая книга');
    this.feedbackControl.valueChanges.subscribe(value => console.log(value));
    this.fullfeedbackControl = new FormGroup({
      feedback: new FormControl(),
      starating: new FormControl()
    });


    this.feedbakerList = new FormGroup({
      feedbacker: new FormArray([
        new FormControl(),
        new FormControl()
      ])
    })
    this.feedbakerList.valueChanges.subscribe((value) => console.log(value))
  }
}


