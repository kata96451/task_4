
import fs from 'fs/promises'

const data = JSON.parse(await fs.readFile('./db.json', { encoding: 'utf8' }))
let arr = [];
let list = [];

const test = (questionId = 0) => {
  const block = data.find(el => el.id === questionId);
  const { question } = block;
  const answers = Object.keys(block.answers);
  const nextIds = Object.values(block.answers);
  let copy = [...arr];

  if (nextIds.every(nextId => nextId === -1)) {
    arr.push({ [question]: `${answers.join('/')}`});
    list.push(arr);
    arr = [];

    return;
  }

  answers.forEach((answer, i) => {
    arr = [...copy];
    arr.push({[question]: `${answer}`});
    let next = nextIds[i];

    if (next === -1) {
      list.push(arr);
      return;
    };

    test(next)
  })
};

test();

let result = {path: {
  number: list.length,
  list: list
}};

result = JSON.stringify(result);

fs.writeFile('result.json', result, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
