import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateuser: Object  = {} ;
  isUpdated: Boolean = false;
  id1:number;
  constructor(private route:ActivatedRoute, private router:Router,private ms: MemberService) { }

  //PUT
  put = function(data){
    this.updateuser = {
      "id":data.id,
      "first_name":data.first_name,
      "last_name":data.last_name,
      "email":data.email,
      "password":data.password,
      "contact_number":data.contact_number
    }

    this.ms.updateUser(this.updateuser).subscribe(res => {
       console.log(res);    
       console.log(this.id1);
       console.log();     
       this.isUpdated=true;
       
    })
  }

  //goto page
  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }

   save(){
    //confirm('New user created successfully!')
    alert('user edited successfully!')
 
}

  ngOnInit(): void {
  }

}
