export class Note {
  id: number;
  title: string;
  description: string;
  group: Group;
}

export class Group {
  id: number;
  name: string;
  color: string;
}

export class GroupNote {
  group: Group;
  note: Note;
}
