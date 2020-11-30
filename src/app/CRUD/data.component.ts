import { Component, OnInit } from '@angular/core';
import { ReactiveFormService } from "../reactive-form/reactive-form.service";
import { basic, present, permanent, skill, qualification, experience } from '../reactive-form/forms';
import { ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  basic: basic []=[];
  present: present []=[];
  permanent: permanent []=[];
  skill: skill []=[];
  qualification: qualification []=[];
  expeience: experience []=[];

  flag4: boolean=true;

  constructor(private _actroute: ActivatedRoute, private data:ReactiveFormService, private _router: Router) { }

  ngOnInit(): void {


    this.data.getAllbasic().subscribe((data)=>
    {
      this.basic=data;
    });


    this.data.getAllpermanent().subscribe((data)=>
    {
    this.permanent=data;
    });


   this.data.getAllqualification().subscribe((data)=>
   {
    this.qualification=data;
   });


  this.data.getAllpresent().subscribe((data)=>
  {
    this.present=data;
  });

  this.data.getAllskill().subscribe((data)=>
  {
    this.skill=data;
  });

  this.data.getAllexperience().subscribe((data)=>
  {
    this.expeience=data;
  });


}

deletebasic(item:basic)
{
  this.data.deletebasic(item.id).subscribe((x:any)=>
    {
      this.basic.splice(this.basic.indexOf(item), 1);
      // this._router.navigate(['./basic',item.id]);

    }
  );
}
editbasic(item: basic) {

  this._router.navigate(['./editbasic']);
}



deletePermanent(item:permanent)
{
  this.data.deletepermanent(item.id).subscribe((x:any)=>
    {
      this.permanent.splice(this.permanent.indexOf(item), 1);
      // this._router.navigate(['./basic',item.id]);

    }
  );
}
editPermanent(item: permanent) {

  this._router.navigate(['./editpermanent']);
}




}
