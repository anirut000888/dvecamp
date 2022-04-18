function draw(n) {
  text = '';
  let z=2;
  for (let i=0; i<n; i++) {
      for (let j=0; j<1; j++) {
          text += z++;
          z++;
      }        
      text += '\n';
      
  }
console.log(text);
}

draw(2);
draw(3);
draw(4);
