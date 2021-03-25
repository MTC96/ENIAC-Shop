import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent implements OnInit {

  @Input() id: string = 'No id';
  @Input() thumbnail: string = 'No image';
  @Input() title: string = 'No title';
  @Input() price: string = 'No price';
  @Input() seller_nick: string = 'No seller nick';

  constructor() { }

  ngOnInit(): void {

  }

}
