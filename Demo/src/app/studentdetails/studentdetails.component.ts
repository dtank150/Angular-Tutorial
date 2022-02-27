import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  students:any[]=[
    {id:1,erno:"20SOECE13055",name:"Dipali Tank",DOB:"04/09/2001",department:"Computer",profile:"../assets/images/2.jpg"},
    {id:2,erno:"20SOECE13044",name:"Divya Rana",DOB:"23/10/2000",department:"Computer",profile:"../assets/images/2.jpg"},
    {id:3,erno:"20SOECE13057",name:"Kirti Sardhara",DOB:"04/11/2001",department:"Computer",profile:"../assets/images/2.jpg"},
    {id:4,erno:"20SOECE13011",name:"Sapna Jethva",DOB:"17/07/2002",department:"Computer",profile:"../assets/images/2.jpg"},
    {id:5,erno:"20SOECE13035",name:"Payal Hadiyal",DOB:"26/01/2000",department:"Computer",profile:"../assets/images/2.jpg"},
    {id:6,erno:"20SOECE13037",name:"Charmi Jethva",DOB:"25/11/2001",department:"Computer",profile:"../assets/images/2.jpg"},
    {id:7,erno:"20SOECE19055",name:"Nilam Signh",DOB:"25/10/2001",department:"Computer",profile:"../assets/images/2.jpg"},
    {id:8,erno:"20SOECE13039",name:"Janki Karavadiya",DOB:"02/10/2000",department:"Computer",profile:"../assets/images/2.jpg"},
    {id:9,erno:"20SOECE20055",name:"Krishna Prajapati",DOB:"04/09/2001",department:"Computer",profile:"../assets/images/2.jpg"},
  ]

  constructor(private _activatedRoute:ActivatedRoute) { }
  student:any=null;

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(param=>{
      this.student=this.students[param['id']]
    })
  }

}
