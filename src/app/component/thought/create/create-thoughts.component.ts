import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Thought } from '../thought';
import { ThoughtService } from './../thought.service';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.scss'],
})
export class CreateThoughtsComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['Reactive Form'],
      authorship: ['Lucas'],
      model: ['model1']
    })
  }

  createThought(){
    this.thoughtService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/listThoughts']);
    });
  }

  cancelThought(){
    this.router.navigate(['/listThoughts']);
  }
}
