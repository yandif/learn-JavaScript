let categrories = [
  {
    id: "1",
    parent: null,
  },
  {
    id: "2",
    parent: "1",
  },
  {
    id: "3",
    parent: "1",
  },
  {
    id: "4",
    parent: "3",
  },
  {
    id: "5",
    parent: "3",
  },
];

function makeTree(categrories, parent) {
  let node = {};
  categrories
    .filter(el => el.parent === parent)
    .forEach(el => {
      node[el.id] = makeTree(categrories, el.id);
    });
  return node;
}
console.log(makeTree(categrories, null));
