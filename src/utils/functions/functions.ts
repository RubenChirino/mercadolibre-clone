function palindrome(_str: string) {
  if (typeof _str !== "string") {
    throw new Error("Invalid input");
  }
  return _str.split("").reverse().join("");
}

function average(_arr: number[]) {
  if (!Array.isArray(_arr)) {
    throw new Error("Invalid input");
  }
  return _arr.reduce((a, b) => a + b, 0) / _arr.length;
}

function isPrefix(list: string[], query: string[]) {
  const res: {
    word: string;
    count: number;
  }[] = [];
  query.forEach((queryWord) => {
    let count = 0;
    list.forEach((listWord) => {
      if (listWord.startsWith(queryWord) && listWord !== queryWord) {
        count += 1;
      }
    });
    res.push({
      word: queryWord,
      count,
    });
  });
  return res;
}

export { palindrome, average, isPrefix };
