import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  arrayData: any [];
  itemIndex: number;
  newArray = [
    { position: 3, positive: 18, negative: 6 },
    { position: 4, positive: 8, negative: 14 },
    { position: 2, positive: 21, negative: 5 },
    { position: 5, positive: 0, negative: 0.1 },
    { position: 1, positive: 24, negative: 3 },
  ];

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('assets/matchboxbrasil.json').subscribe(data => {
        this.arrayData = data['data'] as any [];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
