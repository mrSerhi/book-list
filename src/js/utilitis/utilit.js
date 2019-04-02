// create capitalizing
export const capitalize = value => {
  function parse(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return value
    .split(" ")
    .map(string => parse(string))
    .join(" ");
};

export const jsonParse = data => JSON.parse(data);
export const jsonStringify = data => JSON.stringify(data);
