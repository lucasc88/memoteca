import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent implements OnInit {

  @Input() thought = {
    content: 'Angular is pretty cool',
    authorship: 'Lucas',
    model: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}

  widthThought(): string{
    if(this.thought.content.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
