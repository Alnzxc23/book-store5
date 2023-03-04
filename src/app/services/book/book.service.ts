import { Injectable } from '@angular/core';
import {Book} from "../../shared/model/Book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
  }
 getBookById(id: number): Book{
    return this.getAll().find(book => book.id == id)!;
 }
  getAll(): Book[] {
    return [
      {
        id: 1,
        name: "Шерлок Холмс",
        imageUrl:"/assets/images/books/book-1.jpg",
        paged: 345,
        genre:"Детектив",
        description:"КРУТАЯ КНИГА ПРО САМОГО УМНОГО ДЕТЕКТИВА УПОРОТЫМ МОРФИЕМ",
        star: 5
      },
      {
        id: 2,
        name: "Книга эмоций",
        imageUrl:"/assets/images/books/book-2.jpg",
        paged: 1000,
        genre:"Психология, саморазвитие",
        description:"КРУТАЯ КНИГА ПРО ТО КАК СТАТЬ СУПЕРМЕНОМ",
        star: 5

      },
      {
        id: 3,
        name: "Ведьмак",
        imageUrl:"/assets/images/books/book-3.jpg",
        paged: 2000,
        genre:"Фэнтези",
        description:"КРУТАЯ КНИГА ПРО ЧАРОДЕЯ УБИЙЦУ",
        star: 5
      }
    ]
  }
}
