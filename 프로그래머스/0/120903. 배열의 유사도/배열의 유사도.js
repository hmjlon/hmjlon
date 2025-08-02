function solution(s1, s2) {
  const same = s1.filter((item) => s2.includes(item));
    return same.length;
}