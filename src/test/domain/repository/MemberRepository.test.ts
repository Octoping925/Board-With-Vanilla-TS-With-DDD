import { describe, it, expect, beforeEach } from "vitest";
import { MemberRepository } from "../../../domain/repository/MemberRepository";
import { Member } from "../../../domain/Member";

let memberRepository: MemberRepository;

beforeEach(() => {
  memberRepository = new MemberRepository();
});

describe("MemberRepository", () => {
  it("shoud save and find member", () => {
    const member = new Member(1, "member1");

    memberRepository.save(member);

    expect(memberRepository.findById(1)).toBe(member);
  });

  it("shoud return undefined if member is not found", () => {
    expect(memberRepository.findById(2)).toBe(undefined);
  });

  it("shoud return new id", () => {
    expect(memberRepository.getNewId()).toBe(1);
  });
});
