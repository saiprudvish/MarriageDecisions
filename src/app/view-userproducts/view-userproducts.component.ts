import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-view-userproducts',
  templateUrl: './view-userproducts.component.html',
  styleUrls: ['./view-userproducts.component.css']
})
export class ViewUserproductsComponent implements OnInit {
  products=[];
  currentUser;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.currentUser=localStorage.getItem("username")
    this.adminService.getProductsbyid(this.currentUser).subscribe(
      res=>{
        this.products=res.message;
        console.log(this.products)
      },
      err=>{
        console.log("err in reading expenses ",err)
        console.log("Something went wrong in reading expenses")
      }
    )
  }

}
