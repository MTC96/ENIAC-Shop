import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: [ './paginator.component.css' ]
})
export class PaginatorComponent implements OnInit {
  
  @Input() offset: number = 0;
  @Input() page: number = 1;
  @Output() offsetOut: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(value: number) {
    this.offset += value;
    if (this.offset < 0) {
      this.offset = 0;
    } else if (this.offset > 1000) {
      this.offset -= value;
    }
    this.offsetOut.emit(this.offset);
  }

}
