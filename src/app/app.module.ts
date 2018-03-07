import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AppComponent } from './app.component';
import { ContainerComponentComponent } from './container-component/container-component.component';
import { NoteComponent } from './container-component/note/note.component';
import { GroupComponent } from './container-component/group/group.component';
import { NotePreviewComponent } from './container-component/note-preview/note-preview.component';
import { GroupnoteComponent } from './container-component/groupnote/groupnote.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponentComponent,
    NoteComponent,
    GroupComponent,
    NotePreviewComponent,
    GroupnoteComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    MultiselectDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
