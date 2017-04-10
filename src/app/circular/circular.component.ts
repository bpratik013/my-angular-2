import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

public happyText = 'My Manager is on vacation';

//list of todos
public myTodos=[
'Wash Coffee Mug',
'Take a Shower',
'Say Hi to the new hire'
];

  constructor() { }

  ngOnInit() {
    this.happyText='Manager is sick';
  }

  makeHappier(){
    this.happyText='Manager got Fired!'
  }

}
