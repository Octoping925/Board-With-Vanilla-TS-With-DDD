import { PostViewDTO } from "../../dto/PostViewDTO";
import Config from "../../../config";
import { Page } from "../Page";
import Store from "../../../store";
import { Pages } from "../../Pages";
import { updateView } from "../..";

export class MainPage implements Page {
  updateView() {
    const posts = Config.postRepository.findAll();
    const postDTOs = posts.map((post) => Config.postService.toPostDTO(post));
    this.displayPostList(postDTOs);
    this.addEventToPostList();
  }

  initEvent() {
    document.getElementById("postWriteBtn")?.addEventListener("click", () => {
      Store.layout = Pages.WRITE;
      updateView();
    });
  }

  postToHtml(post: PostViewDTO) {
    return `
      <tr>
          <td class="postId">${post.id}</td>
          <td class="postTitle">${post.title}</td>
          <td class="postWriter">${post.writer}</td>
      </tr>
    `;
  }

  displayPostList(posts: PostViewDTO[]) {
    const postsHtml = posts.map(this.postToHtml).join("");
    document.querySelector(".postList > tbody")!.innerHTML = postsHtml;
  }

  addEventToPostList() {
    const postLists = document.querySelectorAll<HTMLTableRowElement>(
      ".postList > tbody > tr"
    );

    postLists.forEach((post) => {
      post.addEventListener("click", () => {
        const postId =
          post.querySelector<HTMLTableCellElement>(".postId")!.innerText;
        Store.showingPostId = Number(postId);
        Store.layout = Pages.DETAIL;

        updateView();
      });
    });
  }
}
