import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-smart-input',
  templateUrl: './my-smart-input.component.html',
  styleUrls: ['./my-smart-input.component.css']
})
export class MySmartInputComponent implements OnInit {

  constructor() { }

  carName: string = 'Volvo';
  isReadOnly: boolean = Math.random() < 0.5; // random true/ false
  randomSolution: boolean = Math.random() < 0.5; // make one solution or another visible

  ngOnInit() {
  }

}