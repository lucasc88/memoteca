import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.scss'],
})
export class CreateThoughtsComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Learning Angular',
    authorship: 'Dev',
    model: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
