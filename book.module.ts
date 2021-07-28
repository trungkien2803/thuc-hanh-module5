import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [BookComponent, ListComponent, DetailComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ]
})
export class BookModule { }
