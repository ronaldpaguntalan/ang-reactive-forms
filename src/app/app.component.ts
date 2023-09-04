import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form : any;

  constructor(){
    this.form = new FormGroup({
      fullName: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      email: new FormControl(),
      address: new FormControl()
    }); 
  }

  get fullName() {return this.form.get('fullName')}
}
