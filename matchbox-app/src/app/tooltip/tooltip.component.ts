import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() negative: number;
  @Input() positive: number;

  arrayData: any [];
  totalRate: number;
  negativeRate: number [];
  positiveRate: number [];

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('assets/matchboxbrasil.json').subscribe(data => {
      this.arrayData = data['data'] as any [];

    this.totalRate = this.arrayData.map(e => e.positive + e.negative).reduce((acumulador, atual) => {
        return acumulador + atual;
    });

    this.negativeRate = this.arrayData.map(e => Math.round((e.negative * 100) / this.totalRate));

    this.positiveRate = this.arrayData.map(e => Math.round((e.positive * 100) / this.totalRate));

    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
    }
  );
  }

}
