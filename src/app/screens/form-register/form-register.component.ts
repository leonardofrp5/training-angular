import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  registerForm: FormGroup;
  post: any;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  passwordConfirmation: string = '';
  messageAlert: string = 'Campo obligatorio'

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.registerForm = this.fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'passwordConfirmation': [null, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])]
    });
  }

  addPost(post) {
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.email = post.email;
    this.passwordConfirmation = post.passwordConfirmation;
    console.log(post);
  }
}
