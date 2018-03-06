import { Note, Group, GroupNote } from '../models/note.model';

export class NotesService {

  notes: Note[] = [];
  noteId = 0;
  groups: Group[] = [];
  groupId = 0;

  createNote(postTitle: string, postDescription: string) {
    this.noteId += 1;
    this.notes.push({id: this.noteId, title: postTitle, description: postDescription});
    console.log(this.notes);
  }

  createGroup(groupTitle: string) {
    this.groupId += 1;
    this.groups.push({id: this.noteId, label: groupTitle});
  }
}
