import { updateView } from "./view";
import Config from "./config";
import Store from "./store";

const user = Config.memberService.createMember("admin");
Store.loginedMember = user;

updateView();
