import { Member } from "../../domain/Member";
import { it, expect } from "vitest";

it("shoud check equals with its id", () => {
  const member1 = new Member(1, "member1");
  const member2 = new Member(2, "member2");
  const member3 = new Member(1, "member3");

  expect(member1.equals(member1)).toBe(true);
  expect(member1.equals(member2)).toBe(false);
  expect(member1.equals(member3)).toBe(true);
});
