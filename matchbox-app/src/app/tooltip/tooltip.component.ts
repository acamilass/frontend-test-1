import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  arrayData: any [];
  totalRate: number;
  negativeRate: number [];
  positiveRate: number [];

  ngOnInit() {
    this.httpService.get('assets/matchboxbrasil.json').subscribe(data => {
      this.arrayData = data['data'] as any [];

    this.totalRate = this.arrayData.map(e => e.positive + e.negative).reduce((acumulador, atual) => {
        return acumulador + atual;
    });

    this.negativeRate = this.arrayData.map(e => Math.round((e.negative * 100) / this.totalRate));

    this.positiveRate = this.arrayData.map(e => Math.round((e.positive * 100) / this.totalRate));

    console.log(this.negativeRate);
    console.log(this.positiveRate);

    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
    }
  );
  }

}
