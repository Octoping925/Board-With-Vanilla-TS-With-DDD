import { PostViewDTO } from "../../dto/PostViewDTO";
import { Page } from "../Page";
import Config from "../../../config";
import Store from "../../../store";
import { Pages } from "../../Pages";
import { updateView } from "../..";

export class DetailPage implements Page {
  updateView() {
    const post = Config.postRepository.findById(Store.showingPostId!);
    const postDTO = Config.postService.toPostDTO(post!);
    this.displayPostDetail(postDTO);
  }

  initEvent() {
    document
      .querySelector<HTMLButtonElement>("#mainPageBtn")!
      .addEventListener("click", () => {
        Store.layout = Pages.MAIN;
        Store.showingPostId = null;

        updateView();
      });
  }

  displayPostDetail(post: PostViewDTO) {
    document.getElementById("postTitle")!.innerHTML = post.title;
    document.getElementById("postWriter")!.innerHTML = post.writer;
    document.getElementById("postContent")!.innerHTML = post.content;
  }
}
