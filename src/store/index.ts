import { Member } from "../domain/Member";
import { Pages } from "../view/Pages";

interface StateStore {
  layout: Pages;
  loginedMember: Member | null;
  showingPostId: number | null;
}

export default {
  layout: Pages.MAIN,
  loginedMember: null,
  showingPostId: null,
} as StateStore;
