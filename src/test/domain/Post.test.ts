import { describe, it, expect } from "vitest";
import { Post } from "../../domain/Post";
import { Member } from "../../domain/Member";

const member1 = new Member(1, "member1");
const member2 = new Member(2, "member2");

it("shoud check equals with its id", () => {
  const post1 = new Post(1, "title1", "content1", member1);
  const post2 = new Post(2, "title2", "content2", member2);
  const post3 = new Post(1, "title3", "content3", member2);

  expect(post1.equals(post1)).toBe(true);
  expect(post1.equals(post2)).toBe(false);
  expect(post1.equals(post3)).toBe(true);
});

describe("isWriter function", () => {
  it("shoud check if the member is writer", () => {
    const post = new Post(1, "title1", "content1", member1);

    expect(post.isWriter(member1)).toBe(true);
    expect(post.isWriter(member2)).toBe(false);
  });
});

describe("isDeletable function", () => {
  it("shoud check if the member has auth to delete this post", () => {
    const post = new Post(1, "title1", "content1", member1);

    expect(post.isDeletable(member1)).toBe(true);
    expect(post.isDeletable(member2)).toBe(false);
  });
});

describe("update function", () => {
  it("shoud update posts title and content", () => {
    const post = new Post(1, "title1", "content1", member1);

    post.update("new title", "new content");

    expect(post.title).toBe("new title");
    expect(post.content).toBe("new content");
  });
});
