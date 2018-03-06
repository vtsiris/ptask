import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AppComponent } from './app.component';
import { ContainerComponentComponent } from './container-component/container-component.component';
import { NoteComponent } from './container-component/note/note.component';
import { GroupComponent } from './container-component/group/group.component';
import { NotesService } from './services/notes.service';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponentComponent,
    NoteComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    MultiselectDropdownModule,
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
