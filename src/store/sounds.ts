import { makeAutoObservable } from "mobx";

class Sounds {
  isSoundOn: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  toggleSound() {
    this.isSoundOn = !this.isSoundOn;
    this.playClick();
  }

  playClick() {
    if (this.isSoundOn) {
      const sound = new Audio("sounds/click.mp3");
      sound.play();
    }
  }
}

export default new Sounds();
