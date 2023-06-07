import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.scss'],
})
export class CreateThoughtsComponent implements OnInit {

  thought: Thought = {
    id: 1,
    content: 'Learning Angular',
    authorship: 'Dev',
    model: 'model1',
  };

  constructor() {}

  ngOnInit(): void {}

  createThought(){

  }

  cancelThought(){

  }
}
