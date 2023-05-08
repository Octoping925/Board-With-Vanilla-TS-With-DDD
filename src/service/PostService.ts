import { Member } from "../domain/Member";
import { Post } from "../domain/Post";
import { PostViewDTO } from "../view/dto/PostViewDTO";
import { PostRepository } from "../domain/repository/PostRepository";

export class PostService {
  private postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  createPost(member: Member, title: string, content: string) {
    const newId = this.postRepository.getNewId();
    const post = new Post(newId, title, content, member);

    this.postRepository.save(post);
    return post;
  }

  updatePost(member: Member, id: number, title: string, content: string) {
    const post = this.postRepository.findById(id);

    if (!post) {
      throw new Error("게시글이 존재하지 않습니다.");
    }

    if (!post.isWriter(member)) {
      throw new Error("게시글을 수정할 권한이 없습니다.");
    }

    post.update(title, content);
  }

  deletePost(member: Member, id: number) {
    const post = this.postRepository.findById(id);

    if (!post) {
      return;
    }

    if (!post.isDeletable(member)) {
      throw new Error("게시글을 삭제할 권한이 없습니다.");
    }

    this.postRepository.deleteById(id);
  }

  toPostDTO(post: Post): PostViewDTO {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      writer: post.writer.name,
    };
  }
}
