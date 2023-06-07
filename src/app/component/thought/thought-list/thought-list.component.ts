import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.scss'],
})
export class ThoughtListComponent implements OnInit {
  thoughtList = [
    {
      content: 'Angular is so nice',
      authorship: 'Jhon',
      model: 'modelo2',
    },
    {
      content:
        'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      authorship: '',
      model: 'modelo1',
    },
    {
      content: 'Angular is pretty cool',
      authorship: 'Lucas',
      model: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
