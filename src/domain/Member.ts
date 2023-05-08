export class Member {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  equals(member: Member) {
    return this.id === member.id;
  }
}
