import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { basic, present, permanent, skill, qualification, experience } from './forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {
  // updatePermanantAdd(value: any) {
  //   throw new Error('Method not implemented.');
  // }
  // getAllPermanantAddById(taskId1: any) {
  //   throw new Error('Method not implemented.');
  // }
  // getAllPermanantAddById(id1){
  //   return this._http.get(this.url2+id1);
  // }

  url:string ='http://localhost:3000/basic/';
  url1:string ='http://localhost:3000/present/';
  url2:string ='http://localhost:3000/permanent/';
  url3:string ='http://localhost:3000/skill/';
  url4:string ='http://localhost:3000/qualification/';
  url5:string ='http://localhost:3000/experience/';
  constructor(private _http:HttpClient) {};

  getAllbasic(){
    return this._http.get<any>(this.url);
  }




  addbasic(item:basic){
    let head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:head});
  }

  deletebasic(id) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete<any>(this.url + id, { headers: head });
  }
  editbasic(item: basic) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.url + item.Employee_no, body, { headers: head });
  }

  getAllbasicById(id){
    return this._http.get(this.url+id);
   }
// present table starts below

getAllpresent(){
  return this._http.get<any>(this.url1);
}

addpresent(item:present){
  let head=new HttpHeaders().set('Content-Type','application/json');
  let body=JSON.stringify(item);
  return this._http.post(this.url,body,{headers:head});
}

deletepresent(id) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.delete(this.url1 + id, { headers: head });
}

editpresent(item: present) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  let body = JSON.stringify(item);
       return this._http.put(this.url1 + item.present_address, body, { headers: head });
}

// permanent table starts below

getAllpermanent(){
  return this._http.get<any>(this.url2);
}
getAllPermanantAddById(id1){
  return this._http.get(this.url2+id1);
}

addpermanent(item:permanent){
  let head=new HttpHeaders().set('Content-Type','application/json');
  let body=JSON.stringify(item);
  return this._http.post(this.url2,body,{headers:head});
}

deletepermanent(id) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.delete(this.url2 + id, { headers: head });
}
updatepermanent(item: permanent){
  let head= new HttpHeaders().set('Content-Type','application/json');
  let body= JSON.stringify(item);
  return this._http.put(this.url2+item.id, body,{headers: head});
}



// skill table start from below

getAllskill(){
  return this._http.get<any>(this.url3);
}

addskill(item:skill){
  let head=new HttpHeaders().set('Content-Type','application/json');
  let body=JSON.stringify(item);
  return this._http.post(this.url3,body,{headers:head});
}

deleteskill(id) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.delete(this.url3 + id, { headers: head });
}

editskill(item: skill) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  let body = JSON.stringify(item);
       return this._http.put(this.url3 + item.skill_cat, body, { headers: head });
}

// qualification table starts from below

getAllqualification(){
  return this._http.get<any>(this.url4);
}

addqualification(item:qualification){
  let head=new HttpHeaders().set('Content-Type','application/json');
  let body=JSON.stringify(item);
  return this._http.post(this.url4,body,{headers:head});
}

deletequalification(id) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.delete(this.url4 + id, { headers: head });
}

editqualification(item: qualification) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  let body = JSON.stringify(item);
       return this._http.put(this.url4 + item.qualification, body, { headers: head });
}

// experience table starts from below

getAllexperience(){
  return this._http.get<any>(this.url5);
}

addexperience(item:experience){
  let head=new HttpHeaders().set('Content-Type','application/json');
  let body=JSON.stringify(item);
  return this._http.post(this.url5,body,{headers:head});
}
deleteexperience(id) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.delete(this.url5 + id, { headers: head });
}

editexperience(item: experience) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  let body = JSON.stringify(item);
       return this._http.put(this.url5 + item.from_date, body, { headers: head });
}


}
