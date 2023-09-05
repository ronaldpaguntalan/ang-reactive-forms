import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form : any;
  // emailRegex: string = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
  contactRegex: string = "[789][0-9]{9}"

  constructor(){
    this.form = new FormGroup({
      fullName: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('',[
        Validators.required,
        // Validators.pattern(this.emailRegex)
        Validators.email
      ]),
      
      contactDetails: new FormGroup({
        address: new FormControl('',[Validators.required]),
        shippingAddress: new FormControl('',[Validators.required]),
        contactNumber: new FormControl('',[
          Validators.required,
          Validators.pattern(this.contactRegex)
        ])
      })
    }); 
  }

  get fullName() {return this.form.get('fullName')}
  get email() {return this.form.get('email')}
  get address() {return this.form.get('contactDetails.address')}
  get shippingAddress() {return this.form.get('contactDetails.shippingAddress')}
  get contactNumber() {return this.form.get('contactDetails.contactNumber')}

  onSubmit(){
    console.log(this.form.value);
    
  }
}
