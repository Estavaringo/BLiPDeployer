import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadComponent } from './pages/load/load.component';
import { DeployerComponent } from './pages/deployer/deployer.component';


const routes: Routes = [
  { path: 'load', component: LoadComponent },
  { path: 'home', component: DeployerComponent },
  { path: '', component: DeployerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
