import { Member } from "./Member";

export class Post {
  id: number;
  title: string;
  content: string;
  writer: Member;

  constructor(id: number, title: string, content: string, writer: Member) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.writer = writer;
  }

  equals(post: Post) {
    return this.id === post.id;
  }

  isWriter(member: Member) {
    return this.writer.equals(member);
  }

  isDeletable(member: Member) {
    return this.isWriter(member);
  }

  update(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
