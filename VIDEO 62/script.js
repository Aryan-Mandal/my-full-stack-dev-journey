function nameGenerator1(x, y, z) {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return x;
  } else if (num == 1) {
    return y;
  } else {
    return z;
  }
}
function nameGenerator2(x, y, z) {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return x;
  } else if (num == 1) {
    return y;
  } else {
    return z;
  }
}
function nameGenerator3(x, y, z) {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return x;
  } else if (num == 1) {
    return y;
  } else {
    return z;
  }
}
alert("This is a business name generator.");
alert("A random business name will be generated once you press ok");
alert(
  "Business name is: " +
    nameGenerator1("Crazy", "Amazing", "Fire") +
    " " +
    nameGenerator2("Engine", "Foods", "Garments") +
    " " +
    nameGenerator3("Bros", "Limited", "Hub")
);
