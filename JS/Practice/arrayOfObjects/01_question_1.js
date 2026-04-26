// [{ name: "A", score: 80 }, { name: "B", score: 95 }, { name: "C", score: 90 }]
// find the top 2 scores

const scores = [
  { name: "A", score: 80 },
  { name: "B", score: 95 },
  { name: "C", score: 90 },
];

function topScore(scores) {
  let first = null;
  let second = null;

  for (let item of scores) {
    if (!first || item.score > first.score) {
      second = first;
      first = item;
    } else if (!second || item.score > second.score) {
      second = item;
    }
  }

  return [first, second];
}

function topScore2(scores) {
  return [...scores].sort((a, b) => b.score - a.score).slice(0, 2);
}

console.log(topScore2(scores));
