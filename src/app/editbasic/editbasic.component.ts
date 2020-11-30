import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { basic } from '../reactive-form/forms';
import { ReactiveFormService } from "../reactive-form/reactive-form.service";


@Component({
  selector: 'app-editbasic',
  templateUrl: './editbasic.component.html',
  styleUrls: ['./editbasic.component.css']
})
export class EditbasicComponent implements OnInit {
  basic: FormGroup;
  setAddress: any;


  constructor(private _actroute: ActivatedRoute,
    private _data: ReactiveFormService,
    private _router: Router) { }

    taskID;
    age;


  ngOnInit(): void {



  this.basic=new FormGroup ({

    Employee_no: new FormControl(null,[ Validators.required,]),
    Title: new FormControl(null, [Validators.required,]),
    Addressed_as: new FormControl(null,[Validators.required,]),
    First_Name: new FormControl(null,[Validators.required,Validators.minLength(5),]),
    Middle_Name: new FormControl(null, [Validators.required, ]),
    Last_Name: new FormControl(null,[Validators.required, ]),
    Initials: new FormControl(null,[Validators.required,]),
    user_gender: new FormControl("Male"),
    dob: new FormControl(),
    Employee_Age: new FormControl(null,[Validators.required,]),
    Official_Phone: new FormControl(null,[Validators.required,]),
    Personal_Mobile: new FormControl(null,[Validators.required,]),
    Fax: new FormControl(null,[Validators.required,]),
    Official_Email: new FormControl(null,[Validators.required,]),
    Personal_Email: new FormControl(null,[Validators.required,]),
    Personal_Email_2: new FormControl(null,[Validators.required,]),
    Personal_Email_3: new FormControl(null,[Validators.required,]),
    file: new FormControl(null,[Validators.required, ]),
    birth_place: new FormControl(null,[Validators.required,]),
    religion: new FormControl("Hindu",Validators.required),
    caste: new FormControl("Gujarati",Validators.required),
    domicile: new FormControl(null,[Validators.required]),
    nationality: new FormControl("Indian",Validators.required),
    voter_id: new FormControl(null,[Validators.required]),
    pan_no:  new FormControl(null,[Validators.required]),
    aadhaar_no: new FormControl(null,[Validators.required]),
    maritial_status: new FormControl("Married",Validators.required),
    no_of_status: new FormControl(null,[Validators.required]),
    marriage_date: new FormControl(null,[Validators.required]),
   //Spouse_Name:  new FormControl(null,[Validators.required]),
    account_type:  new FormControl(null,[Validators.required]),
    payment_type: new FormControl(null,[Validators.required]),
    account_no:  new FormControl(null,[Validators.required]),
    branch_details: new FormControl(null,[Validators.required]),
    ifsc_code:  new FormControl(null,[Validators.required]),
    bank_name:  new FormControl(null,[Validators.required]),
    reimbursement_bank_name:  new FormControl(null,[Validators.required]),
    reimbursement_account_no:  new FormControl(null,[Validators.required]),



});

this.basic.get('dob').valueChanges.subscribe((x) => this.setAddress(x));




this.taskID=this._actroute.snapshot.params['id'];
this._data.getAllbasicById(this.taskID).subscribe(
  (data:basic[])=>{
   this.basic.patchValue({
    Id: data[0].id,
    Employee_no:data[0].Employee_no,
    Title:data[0].Title,
    Addressed_as:data[0].Addressed_as,
    First_Name:data[0].First_Name,
    Middle_Name:data[0].Middle_Name,
    Last_Name:data[0].Last_Name,
    Initials:data[0].Initials,
    user_gender:data[0].user_gender,
    dob:data[0].dob,
    Employee_Age:data[0].Employee_Age,
    Official_Phone:data[0].Official_Phone,
    Personal_Mobile:data[0].Personal_Mobile,
    Fax:data[0].Fax,
    Official_Email:data[0].Official_Email,
    Personal_Email:data[0].Personal_Email,
    Personal_Email_2:data[0].Personal_Email_2,
    Personal_Email_3:data[0].Personal_Email_3,
    file:data[0].file,
    birth_place:data[0].birth_place,
    religion:data[0].religion,
    caste:data[0].caste,
    domicile:data[0].domicile,
    nationality:data[0].nationality,
    voter_id:data[0].voter_id,
    pan_no:data[0].pan_no,
    aadhaar_no:data[0].aadhaar_no,
    maritial_status:data[0].maritial_status,
    no_of_status:data[0].no_of_status,
    marriage_date:data[0].marriage_date,
    account_type:data[0].account_type,
    payment_type:data[0].payment_type,
    account_no:data[0].account_no,
    branch_details:data[0].branch_details,
    ifsc_code:data[0].ifsc_code,
    bank_name:data[0].bank_name,
    reimbursement_bank_name:data[0].reimbursement_bank_name,
    reimbursement_account_no:data[0].reimbursement_account_no,
   });
  }
)

  }

updatebasic(){
  this._data.editbasic(this.basic.value).subscribe(
    (x)=>{
     // console.log('abc',this.basicInfoEdit.value);
      this._router.navigate(['/CRUD']);
    })

 }

updateEmpAge(val: Date){
  var today = new Date();
  var year= today.getFullYear();
  var birthDate= new Date(val).getFullYear();
  var a=year-birthDate;
  //console.log(a);
  //this.age=a;
  this.basic.get('EmpAge').setValue(a);
  }

 }





