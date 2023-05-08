import { Page } from "../Page";
import Config from "../../../config";
import Store from "../../../store";
import { Pages } from "../../Pages";
import { updateView } from "../..";

export class WritePage implements Page {
  updateView() {}

  initEvent() {
    document.getElementById("postSaveBtn")?.addEventListener("click", () => {
      const titleInput =
        document.querySelector<HTMLInputElement>("#postTitleInput")!;
      const contentInput =
        document.querySelector<HTMLInputElement>("#postContentInput")!;

      Config.postService.createPost(
        Store.loginedMember!,
        titleInput.value,
        contentInput.value
      );

      alert("글이 등록되었습니다.");

      titleInput.value = "";
      contentInput.value = "";

      Store.layout = Pages.MAIN;
      updateView();
    });
  }
}
