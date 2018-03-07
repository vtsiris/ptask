export class Note {
  id: number;
  title: string;
  description: string;
}

export class Group {
  id: number;
  name: string;
}

export class GroupNote {
  group: Group;
  note: Note;
}
