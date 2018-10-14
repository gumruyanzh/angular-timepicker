import {Component} from '@angular/core';
import {UtilServiceService} from './util-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hoursList: any;
  from: any;
  to: any;
  timeForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.hoursList = UtilServiceService.hoursList(15);
    this.timeForm = fb.group({
      'from': '',
      'to': ''
    });

  }

  submit() {
    this.from = this.timeForm.controls['from'];
    this.to = this.timeForm.controls['to'];
    console.log('from ' + this.from + ' to ' + this.to);
  }

}
