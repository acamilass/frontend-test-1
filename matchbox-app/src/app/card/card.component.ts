import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  arrayData: any [];

  ngOnInit() {
    this.httpService.get('assets/matchboxbrasil.json').subscribe(data => {
        this.arrayData = data.data as any [];
        // console.log(this.arrayData[0].name.split(' ', 2).join(' '));
        // console.log(data.data[0]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
