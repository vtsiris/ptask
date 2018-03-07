import { Component, OnInit, Input } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Note } from '../../models/note.model';
import { ContainerComponentComponent } from '../container-component.component';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent implements OnInit {

  @Input() notes: Note[];

  optionsModel: number[];
  myOptions: IMultiSelectOption[];

  constructor() { }

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
