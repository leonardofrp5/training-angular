import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  registerForm: FormGroup;
  post: any;

  constructor( private fb: FormBuilder, private registerService: RegisterService, private GetDataService: GetdataService) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.registerForm = this.fb.group({
      'first_name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'last_name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'locale': [null, Validators.required],
      'password_confirmation': [null, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])],
      'password': [null, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])]
    });
  }

  addPost() {
    this.registerService.userRegister(this.registerForm.value).subscribe(responsePost => console.log('Succesfull', responsePost) );
    console.log(this.registerForm.value);
  }

  getData() {
     this.GetDataService.getData().subscribe(data => {
       this.post = data
      });
  }
}
