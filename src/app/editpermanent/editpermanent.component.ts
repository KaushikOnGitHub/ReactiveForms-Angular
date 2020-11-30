import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { permanent } from '../reactive-form/forms';
import { ReactiveFormService } from "../reactive-form/reactive-form.service";


@Component({
  selector: 'app-editpermanent',
  templateUrl: './editpermanent.component.html',
  styleUrls: ['./editpermanent.component.css']
})
export class EditpermanentComponent implements OnInit {

  permanant: FormGroup;

    id;
    address_permanent;
    percity;
    percountry;
    perstate;
    perdistrict;
    perpin;
    phone1;
    phone2;
    fax_mobile;
    personal_email;

   taskId1: any;
   permanantAdd1: any;
   city1: any;
   state1: any;
   country1: any;
   district1: any;
   pincode1: any;
   phone21: any;
   phone11: any;
   fax1: any;
   personalmailId1: any;



  constructor( private _actrouter: ActivatedRoute,
    private _data: ReactiveFormService,
    private _router: Router) { }

  ngOnInit(): void {

    this.permanant=new FormGroup({
      PermanantAddEdit:new FormGroup({
        id: new FormControl(),
        address_permanent:new FormControl(null,[Validators.required ]),
        percity: new FormControl("bengaluru",[Validators.required ]),
        percountry: new FormControl(),
        perstate: new FormControl(),
        perdistrict: new FormControl(),
        perpin: new FormControl(),
        phone1: new FormControl(),
        phone2: new FormControl(),
        fax_mobile: new FormControl(),
        personal_email: new FormControl(),
        sameaddress: new  FormControl(),
    }),



     presentaddEdit: new FormControl(),
     id: new FormControl(),
     present_address: new FormControl(),
     city: new FormControl(),
     country: new FormControl(),
     state: new FormControl(),
     district: new FormControl(),
     pin: new FormControl(),
});


this.permanant.get('PermanantAddEdit').get('sameaddress').valueChanges.subscribe((x)=> this.Accessval(x, this.permanant.get('PermanantAddEdit').value));
    this.permanant.get('PermanantAddEdit').get('sameaddress').valueChanges.subscribe((a)=> this.edit(a));

    this.taskId1=this._actrouter.snapshot.params['id1'];
    console.log(this.taskId1);
    this._data.getAllPermanantAddById(this.taskId1).subscribe((data:PermanantAdd[])=>
    {
        console.log(data[0]);
       this.permanant.get('PermanantAddEdit').patchValue({
        id: data[0].id,
        address_permanent: data[0].address_permanent,
        percity: data[0].percity,
        percountry: data[0].percountry,
        perstate: data[0].perstate,
        perdistrict: data[0].perdistrict,
        perpin: data[0].perpin,
        phone1:data[0].phone1,
        phone2: data[0].phone2,
        fax_mobile:data[0].fax_mobile,
        personal_email: data[0].personal_email,
        sameaddress: data[0].sameaddress
       })
      });

  }

  Accessval(x: any, value: any): void {
    throw new Error('Method not implemented.');
  }
  edit(a: any): void {
    throw new Error('Method not implemented.');
  }

  permanantedit(){
    this._data.updatePermanantAdd(this.permanant.value).subscribe(
      (x)=>{
        this._router.navigate(['/CRUD']);
      }
    )
    console.log(this.permanant.value);

  }

  edit(d: boolean){
    if(d==true)
    {
      this.permanant.get('PermanantAddEdit').valueChanges.subscribe((f)=> this.Accessval(this.permanant.get('PermanantAddEdit').get('sameaddress').value,f))
    }
  }


  Accessval(val: boolean, val1: FormGroup){
    if(val==true){

      this. permanantAdd1=val1['permanantadd'];
      this.city1=val1['city'];
      this.state1=val1['state'];
      this.country1=val1['country'];
      this.district1=val1['district'];
      this.pincode1=val1['pincode'];
      this.phone21=val1['phone2'];
      this.phone11=val1['phone1'];
      this.fax1=val1['fax'];
      this.personalmailId1=val1['mobile'];

    }
 else{
      this.permanantAdd1=null;
      this.city1=null;
      this.state1=null;
      this.country1=null;
      this.district1=null;
      this.pincode1=null
      this.phone21=null
      this.phone11=null
      this.fax1=null
      this.personalmailId1=null
      }



    }

}
