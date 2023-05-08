import { describe, it, expect, beforeEach } from "vitest";
import { Member } from "../../domain/Member";
import { PostRepository } from "../../domain/repository/PostRepository";
import { PostService } from "../../service/PostService";
import { Post } from "../../domain/Post";

let postRepository: PostRepository;
let postService: PostService;

const member1 = new Member(1, "member1");

beforeEach(() => {
  postRepository = new PostRepository();
  postService = new PostService(postRepository);
});

describe("PostService", () => {
  it("shoud create post and save to repository", () => {
    const post = postService.createPost(member1, "title1", "content1");

    expect(post.id).toBe(1);
    expect(post.title).toBe("title1");
    expect(post.content).toBe("content1");
    expect(post.writer).toBe(member1);
    expect(postRepository.findById(1)).toBe(post);
  });

  it("shoud return post dto", () => {
    const post = new Post(1, "title1", "content1", member1);

    expect(postService.toPostDTO(post)).toEqual({
      id: 1,
      title: "title1",
      content: "content1",
      writer: "member1",
    });
  });
});
