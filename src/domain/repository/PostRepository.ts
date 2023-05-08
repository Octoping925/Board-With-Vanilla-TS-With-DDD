import { Post } from "../Post";

export class PostRepository {
  private repository: Post[];

  constructor(repository: Post[] = []) {
    this.repository = repository;
  }

  getNewId() {
    return this.repository.length + 1;
  }

  save(post: Post) {
    this.repository.push(post);
  }

  findById(id: number) {
    return this.repository.find((post) => post.id === id);
  }

  findAll() {
    return [...this.repository];
  }

  deleteById(id: number) {
    const index = this.repository.findIndex((post) => post.id === id);
    this.repository.splice(index, 1);
  }
}
