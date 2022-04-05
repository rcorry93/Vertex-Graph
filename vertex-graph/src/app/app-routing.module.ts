import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { VertexGraphContainerComponent } from './components/vertex-graph/vertex-graph-container/vertex-graph-container/vertex-graph-container.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'vertex-graph-maker',
  component: VertexGraphContainerComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
