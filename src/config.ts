import { MemberRepository } from "./domain/repository/MemberRepository";
import { PostRepository } from "./domain/repository/PostRepository";
import { MemberService } from "./service/MemberService";
import { PostService } from "./service/PostService";

const memberRepository = new MemberRepository();
const postRepository = new PostRepository();

const memberService = new MemberService(memberRepository);
const postService = new PostService(postRepository);

export default {
  memberRepository,
  postRepository,
  memberService,
  postService,
};
