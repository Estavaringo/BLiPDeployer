import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadComponent } from './pages/load/load.component';
import { DeployerComponent } from './pages/deployer/deployer.component';
import { AddBotComponent } from './pages/add-bot/add-bot.component';


const routes: Routes = [
  { path: '', component: LoadComponent },
  { path: 'home', component: DeployerComponent },
  { path: 'add-bot', component: AddBotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
