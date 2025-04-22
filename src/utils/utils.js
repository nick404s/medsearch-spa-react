const removeFirstWords = (element, numberOfWords) => {
  const words = element[0].split(" ");

  if (words.length <= numberOfWords) {
    return element;
  }
  words.splice(0, numberOfWords);
  return words.join(" ");
};

const getCleanData = (data, searchTearm) => {
  return data.filter((item) => {
    const purpose = item.purpose[0];
    return isCorrectPurpose(purpose, searchTearm);
  });
};

const isCorrectPurpose = (purpose, searchTearm) => {
  purpose = purpose.toLowerCase();
  return (
    purpose.includes(searchTearm.toLowerCase()) &&
    !purpose.includes("warning") &&
    !purpose.includes("ask a doctor") &&
    !purpose.includes("active ingredient")
  );
};

export { removeFirstWords, getCleanData };
