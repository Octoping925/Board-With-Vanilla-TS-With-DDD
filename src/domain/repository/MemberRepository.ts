import { Member } from "../Member";

export class MemberRepository {
  private repository: Member[];

  constructor(repository: Member[] = []) {
    this.repository = repository;
  }

  getNewId() {
    return this.repository.length + 1;
  }

  save(member: Member) {
    this.repository.push(member);
  }

  findById(id: number) {
    return this.repository.find((member) => member.id === id);
  }
}
