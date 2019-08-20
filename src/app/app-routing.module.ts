import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes:Routes=[

{path:"cmp1",component:Cmp1Component},
{path:"cmp2",component:Cmp2Component},
{path:"lazy",loadChildren:()=> import('./module/module.module').then(m => m.ModuleModule)},
{path:"**",component:NotFoundComponent}


];


@NgModule({
declarations:[Cmp1Component,
  Cmp2Component,
  NotFoundComponent,
    ],
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
