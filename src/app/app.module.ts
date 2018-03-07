import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AppComponent } from './app.component';
import { ContainerComponentComponent } from './container-component/container-component.component';
import { NoteComponent } from './container-component/note/note.component';
import { GroupComponent } from './container-component/group/group.component';
import { NotesService } from './services/notes.service';
import { NotePreviewComponent } from './container-component/note-preview/note-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponentComponent,
    NoteComponent,
    GroupComponent,
    NotePreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MultiselectDropdownModule,
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
