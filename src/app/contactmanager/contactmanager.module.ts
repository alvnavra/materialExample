import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';


import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule} from '../shared/material.module';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule } from '@angular/material';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path:'', component:ContactmanagerAppComponent,
   children:[
     {path:'', component:MainContentComponent}
   ]
  },  
  {path:'**', redirectTo:''}
];


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[UsersService],
  declarations: [ContactmanagerAppComponent,ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class ContactmanagerModule { }
