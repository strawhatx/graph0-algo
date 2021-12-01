class RunLengthEncoding {
  findRunLength(str = "") {
    if (str.length === 0) return "EMPTY STRING";

    let count = 1;

    let letter = str[0];

    let result = "";

    for (let i = 1; i < str.length; i++) {
      if (str[i] === null || str[i] === " ") continue;

      if (str[i] !== letter) {
        result += `${count}${letter} `;

        count = 1;

        letter = str[i];
      } else {
        count++;
      }

      if (i === str.length - 1) {
        result += `${count}${letter} `;
      }
    }

    return result;
  }
}

console.log(
  new RunLengthEncoding().findRunLength("aaaabbcccccccccdddefffgghh")
);
