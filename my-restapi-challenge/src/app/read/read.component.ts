import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MemberService } from '../member.service';
import Member from 'src/app/Member';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  users: Member[];
  item : Member;
 item1: Member;
 getid: any;
  id(event:any){
    this.getid = event.target.value;
  }
  
  isdel: Boolean = false;

  constructor(private route:ActivatedRoute, private router:Router, private ms:MemberService) { }

  //goto page
  goToPage(pageName:string): void{
    this.router.navigate([`${pageName}`]);
   }
  
 
   //for GET by ID
   getbyid(){
     //this.byid = true;
     console.log(this.getid);
     this.ms.getUserById(this.getid).subscribe( res => {
       this.item = res["data"] 
       console.log("Response", res);
       console.log("Items ",this.item);
       //console.log(this.users)
       return this.item;
 
       
     });
    }

  ngOnInit(): void {
  }

}
