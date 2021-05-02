class Dog {
  constructor() {
    this.sound = "woof";
  }
  take() {
    console.log(this.sound);
  }
}
const dot = new Dog();
dot.take();

function dog() {
  let sound = "woof";
  return {
    take: () => {
      console.log(sound);
    },
  };
}
const dos = dog();
dos.take();
