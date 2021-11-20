import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result?: moment.Moment;

  form = this.fb.group({
    start: ['', Validators.required],
    hours: ['', [Validators.required, Validators.min(1)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  calculateTime() {
    if (!this.form.valid) return
    this.result = moment(this.form.controls['start'].value)
      .add(this.form.controls['hours'].value, 'hours');
  }
}
