function draw(n) {
  text = "";
  let z = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > 0; j--) {
      if (i >= j) {
        text += z;
        z++;
      } else {
        text += "-";
      }
    }
    text += "\n";
  }

   // 2.5 ต่อด้วย 2.6 และเปลี่ยนบรรทัดล่างเป็น i = n - 1
  for (let i = n - 1; i >= 1; i--) {
    for (let j = n; j > 0; j--) {
      if (i < j) {
        text += "-";
      } else {
        text += z;
        z++;
      }
    }
    text += "\n";
  }
  console.log(text);
}

draw(2);
draw(3);
draw(4);
