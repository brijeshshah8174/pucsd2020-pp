import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private ms: MemberService, private router: Router,) { }

  newuser: Object  = {} ;
  isAdded: Boolean = false;
  ngOnInit(): void {
  }

  post = function(data){
    this.newuser = {
      "first_name":data.first_name,
      "last_name":data.last_name,
      "email":data.email,
      "password":data.password,
      "contact_number":data.contact_number
    }

    this.ms.createUser(this.newuser).subscribe(res => {
       console.log(res);
       console.log(this.newuser);
       this.isAdded=true;
       //this.router.navigate(['user-list']);
    })
  }

  save(){
      //confirm('New user created successfully!')
      alert('New user created successfully!')
   
  }

  goToPage(pageName:string): void{

    this.router.navigate([`${pageName}`]);
   }
   

}
