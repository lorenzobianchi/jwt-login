import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // without FormBuilder
    // this.myForm = new FormGroup({
    //   name: new FormControl('Lore'),
    //   email: new FormControl(),
    //   message: new FormControl(),
    // })

    // with FormBuilder
    // this.myForm = this.fb.group({
    //   name: 'Lore',
    //   email: '',
    //   message: '',
    // })

    // with FormBuilder & Validators
    this.myForm = this.fb.group({
      name: ['Lore', Validators.required], // the value must be an array
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]], // is possible to pass a Validator regex pattern
      message: ['', [Validators.required, Validators.minLength(15)]], // or for example a min length validation
    })
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message',  form.value.message)
  }

}
