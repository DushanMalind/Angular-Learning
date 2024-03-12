import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent {
  name!: string;
  email!: string;
  feedback!: string;

  userArray: Array<any> = [];


  form:any;
  passwordsRegx:string = "^[a-zA-Z0-9]{8,}$";

  constructor() {
    this.form = new FormGroup({
      floating_email: new FormControl('',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
      ]),
      floating_password: new FormControl('',[
        Validators.required,
        Validators.pattern(this.passwordsRegx)
      ]),
      repeat_password: new FormControl('',[
        Validators.required,
        Validators.pattern(this.passwordsRegx)
      ]),
      floating_first_name: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)

      ]),
      floating_last_name: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)

      ]),
    });
  }

  get Email(){
    return this.form.get('floating_email');
  }

  get Password(){
    return this.form.get('floating_password');
  }

  get RepeatPassword(){
    return this.form.get('repeat_password');
  }

  get FirstName(){
    return this.form.get('floating_first_name');
  }

  get LastName(){
    return this.form.get('floating_last_name');
  }

  onClick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "feedback": this.feedback
     /*  name: this.name,
       email: this.email,
      feedback: this.feedback*/
    });
    console.log(this.userArray);
    /*window.location.href = "/home";*/
  }

  onDelete(index: number){
    /*this.userArray.pop();*/
    this.userArray.splice(index, 1);

  }
  /*if(){
    window.location.href = "https://www.google.com";
  }*/


/*ngForm*/

  onSubmit(f: NgForm){
    console.log(f.value);
  }

  getValue(f: NgModel){
    console.log(f);
  }

}
