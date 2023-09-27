import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

  userCartObj;
  products=[];
 expenses=[];
  constructor(private adminService:AdminService , private userService:UserService) { }

  ngOnInit(): void {
   
    this.adminService.getProducts().subscribe(
      res=>{
        this.expenses=res.message;
      },
      err=>{
        console.log("err in reading expenses ",err)
        console.log("Something went wrong in reading expenses")
      }
    )

    this.userService.dataObservable.subscribe(
      res=>{

       
        if(res["message"]==='Cart-empty'){
          alert("expenses are empty")
        }
        else{
          
            this.products=res["products"]
          
        }
      },
      err=>{
        console.log("err in reading expenses",err)
        alert("Something went wrong in fetching expense items..")
      }
    )
  }

}
