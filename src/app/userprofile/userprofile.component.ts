import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userObj;
 expenses=[];
  count;
  constructor(private adminService:AdminService,private hc:HttpClient,private us:UserService) { }

  ngOnInit(): void {
    
    // //get user data from local storage
    this.userObj= JSON.parse(localStorage.getItem("userObj"))
    
    this.adminService.getProducts().subscribe(

      res=>{
        if(res.message.length===0){
          this.us.updateDataObservable(0)
        }
        else{
          this.us.updateDataObservable(res.message)
        }
        this.us.dataObservable.subscribe(prodObj=>{
           if(prodObj==0){
              this.count=0;
           }
           else{
             this.count=this.expenses.length;
           }
        })
      }
    )

  }


  

}
