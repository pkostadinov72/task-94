import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    this.div = document.querySelector("#emojis");
    this.paragraph = document.createElement("p");
    this.div.append(this.paragraph);
  }

  addBananas() {
    this.emojis = this.emojis.map((i) => (i += this.banana));
    this.paragraph.textContent = this.emojis;
  }
}
