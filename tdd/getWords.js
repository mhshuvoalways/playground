const getWords = (sentence) => {
  if (typeof sentence !== "string") {
    throw new Error("Invalid argument type");
  }
  const words = sentence.split(" ");
  console.log(words);
  if (words.length === 1) return sentence;
  return words;
};

module.exports = { getWords };
