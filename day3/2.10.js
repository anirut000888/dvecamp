function draw(n) {
  text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < n * 2; j++) {
      if (j >= i && j <= n * 2 - i) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
}

draw(2);
draw(3);
draw(4);