import { Member } from "../domain/Member";
import { MemberRepository } from "../domain/repository/MemberRepository";

export class MemberService {
  private memberRepository: MemberRepository;

  constructor(memberRepository: MemberRepository) {
    this.memberRepository = memberRepository;
  }

  createMember(name: string) {
    const newId = this.memberRepository.getNewId();
    const member = new Member(newId, name);
    this.memberRepository.save(member);
    return member;
  }

  toMemberDTO(member: Member) {
    return {
      id: member.id,
      name: member.name,
    };
  }
}
