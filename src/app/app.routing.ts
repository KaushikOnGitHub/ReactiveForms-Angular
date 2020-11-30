import {Routes,RouterModule} from '@angular/router';
import { DataComponent } from './CRUD/data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EditbasicComponent } from './editbasic/editbasic.component';
import { EditpermanentComponent } from './editpermanent/editpermanent.component';


const arr: Routes=[

  {path:'CRUD',component:DataComponent},
  {path:'reactive-form',component:ReactiveFormComponent},
  {path:'editbasic',component:EditbasicComponent},
  {path:'editpermanent',component:EditpermanentComponent}


];

export const arrRouting= RouterModule.forRoot(arr);

