function nameGenerator(x, y, z) {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return x;
  } else if (num == 1) {
    return y;
  } else {
    return z;
  }
}
console.alert("This is a business name generator.");
console.alert("A random business name will be generated once you press");
