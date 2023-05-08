import { describe, it, expect, beforeEach } from "vitest";
import { MemberService } from "../../service/MemberService";
import { MemberRepository } from "../../domain/repository/MemberRepository";
import { Member } from "../../domain/Member";

let memberRepository: MemberRepository;
let memberService: MemberService;

beforeEach(() => {
  memberRepository = new MemberRepository();
  memberService = new MemberService(memberRepository);
});

describe("MemberService", () => {
  it("shoud create member and save to repository", () => {
    const member = memberService.createMember("member1");

    expect(member.id).toBe(1);
    expect(member.name).toBe("member1");
    expect(memberRepository.findById(1)).toBe(member);
  });

  it("shoud return member dto", () => {
    const member = new Member(1, "member1");

    expect(memberService.toMemberDTO(member)).toEqual({
      id: 1,
      name: "member1",
    });
  });
});
