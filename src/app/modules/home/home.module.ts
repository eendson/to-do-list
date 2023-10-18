import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { DeleteAllComponent } from './components/delete-all/delete-all.component';
import { InputAddComponent } from './components/input-add/input-add.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
// pagina

import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    DeleteAllComponent,
    InputAddComponent,
    ToDoListComponent,
    HomeComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
