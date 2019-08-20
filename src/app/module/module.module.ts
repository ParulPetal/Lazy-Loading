import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy1Component } from './lazy1/lazy1.component';
import { Lazy2Component } from './lazy2/lazy2.component';
import { RouterModule, Routes } from '@angular/router';



const routes:Routes=[
{path:"",children:[
{path:"lazy1",component:Lazy1Component},
{path:"lazy2",component:Lazy2Component}
]}
];

@NgModule({
  declarations: [Lazy1Component, Lazy2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ModuleModule { 
constructor(){
  console.log("Lazy Module");
}

}
