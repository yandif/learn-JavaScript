//组合而不是继承
const barker = state => ({
  bake: () => {
    console.log(`Woof, I am ${state.name}`);
  },
});
const driver = state => ({
  drive: () => {
    state.position += state.speed;
  },
});
const killer = state => ({
  kill: () => {
    console.log(state);
  },
});

const muderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };

  return Object.assign({}, barker(state), driver(state), killer(state));
};

let dot = muderRobotDog("dot");
dot.bake();
dot.drive();
dot.kill();
dot.bake();
dot.drive();
dot.kill();
dot.bake();
dot.drive();
dot.kill();
