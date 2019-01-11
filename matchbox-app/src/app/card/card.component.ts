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
