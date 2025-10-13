function solution(my_string, alp) {
  return my_string
    .split("")
    .map(letter => letter === alp ? letter.toUpperCase() : letter)
    .join("");
}
