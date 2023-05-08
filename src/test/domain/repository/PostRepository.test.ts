import { describe, it, expect, beforeEach } from "vitest";
import { Member } from "../../../domain/Member";
import { PostRepository } from "../../../domain/repository/PostRepository";
import { Post } from "../../../domain/Post";

let postRepository: PostRepository;

const member1 = new Member(1, "member1");
const member2 = new Member(2, "member2");

beforeEach(() => {
  postRepository = new PostRepository();
});

describe("PostRepository", () => {
  it("shoud save and find post", () => {
    const post = new Post(1, "title1", "content1", member1);

    postRepository.save(post);

    expect(postRepository.findById(1)).toBe(post);
  });

  it("shoud return undefined if post is not found", () => {
    expect(postRepository.findById(2)).toBe(undefined);
  });

  it("shoud return new id", () => {
    expect(postRepository.getNewId()).toBe(1);
  });

  it("shoud return all posts", () => {
    const post1 = new Post(1, "title1", "content1", member1);
    const post2 = new Post(2, "title2", "content2", member2);

    postRepository.save(post1);
    postRepository.save(post2);

    expect(postRepository.findAll()).toEqual([post1, post2]);
  });

  it("shoud delete post", () => {
    const post1 = new Post(1, "title1", "content1", member1);
    const post2 = new Post(2, "title2", "content2", member2);

    postRepository.save(post1);
    postRepository.save(post2);

    postRepository.deleteById(1);

    expect(postRepository.findAll()).toEqual([post2]);
  });
});
