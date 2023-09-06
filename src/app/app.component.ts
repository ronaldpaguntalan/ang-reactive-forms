import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form : any;
  // emailRegex: string = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
  contactRegex: string = "[789][0-9]{9}"



  constructor( fb: FormBuilder ){
    // Using FormBuilder
    // this.form = fb.group({
    //   fullName: ['', [
    //     Validators.required,
    //     Validators.minLength(5)
    //   ]],

    //   email: ['', [
    //     Validators.required,
    //     // Validators.pattern(this.emailRegex)
    //     Validators.email
    //   ]],

    //   contactDetails: fb.group({
    //     address: ['', Validators.required],
    //     shippingAddress: ['', Validators.required],
    //     contact: ['', [
    //       Validators.required,
    //       Validators.pattern(this.contactRegex)
    //     ]]
    //   }),

    //   skills: fb.array([])
    // })

  //  Longer way of creating a Nested Form Group, Form Control, and Form Array
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
      }),

      skills : new FormArray([])
    }); 
  
  }

  get fullName() {return this.form.get('fullName')}
  get email() {return this.form.get('email')}
  get address() {return this.form.get('contactDetails.address')}
  get shippingAddress() {return this.form.get('contactDetails.shippingAddress')}
  get contactNumber() {return this.form.get('contactDetails.contactNumber')}
  get Skills(){return this.form.get('skills') as FormArray}

  onSubmit(){
    console.log(this.form.value);
    
  }

  addSkills(skills: HTMLInputElement){
   this.Skills.push(
    new FormControl(skills.value)
   );
   console.log(this.form.value);

   skills.value = '';
  }

  removeSkills(index: number){
    this.Skills.removeAt(index);
  }
}
