import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent implements OnInit {

  optionsModel: number[];
  myOptions: IMultiSelectOption[];

  constructor(public noteService: NotesService) { }

  ngOnInit() {
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
  ];
  }

  onChange() {
    console.log(this.optionsModel);
}

}
