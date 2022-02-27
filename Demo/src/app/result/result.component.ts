import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  names=['Dipali','Yash','Krishna','Dev'];
  subjects=['Compter']
  marks=['99']
  

  constructor() { }

  ngOnInit(): void {
  }

  show(name:any){
    console.log(name.value)
  }
  func(subject:any){
    console.log(subject.value)
  }
  display(mark:any){
    console.log(mark.value)
  }
  submit(name:any,mark:any,subject:any){
    console.log(name.value)
    console.log(subject.value)
    console.log(mark.value)
  }
  over(){
    console.log("Mouseover called");
  }

  leave(){
    console.log("Mouseleave called");
  }

}
