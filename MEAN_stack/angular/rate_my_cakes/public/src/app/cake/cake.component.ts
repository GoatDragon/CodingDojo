import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  @Input() cakeToShow: any;

  constructor() { }

  ngOnInit() {
  }

}
