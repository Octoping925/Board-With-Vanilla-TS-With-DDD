import { Pages } from "./Pages";
import Store from "../store";
import { Page } from "./page/Page";
import { MainPage } from "./page/main";
import { DetailPage } from "./page/detail";
import { WritePage } from "./page/write";

const mainPage = new MainPage();
mainPage.initEvent();
const detailPage = new DetailPage();
detailPage.initEvent();
const writePage = new WritePage();
writePage.initEvent();

export function updateView() {
  showLayout(Store.layout);
  updatePage(getPageByLayout(Store.layout));
}

function showLayout(page: Pages) {
  switch (page) {
    case Pages.MAIN:
      document.querySelector(".mainPage")!.classList.remove("hidden");
      document.querySelector(".detailPage")!.classList.add("hidden");
      document.querySelector(".writePage")!.classList.add("hidden");
      break;
    case Pages.DETAIL:
      document.querySelector(".mainPage")!.classList.add("hidden");
      document.querySelector(".detailPage")!.classList.remove("hidden");
      document.querySelector(".writePage")!.classList.add("hidden");
      break;
    case Pages.WRITE:
      document.querySelector(".mainPage")!.classList.add("hidden");
      document.querySelector(".detailPage")!.classList.add("hidden");
      document.querySelector(".writePage")!.classList.remove("hidden");
      break;
  }
}

export function getPageByLayout(layout: Pages): Page {
  switch (layout) {
    case Pages.MAIN:
      return mainPage;
    case Pages.DETAIL:
      return detailPage;
    case Pages.WRITE:
      return writePage;
  }
}

function updatePage(page: Page) {
  page.updateView();
}
