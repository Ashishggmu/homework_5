const uncompressed = "QQQUUUUUUUlllllllqqQQQQQQQQQTTA";
function compressed() {
    
    let compressed = '';

    for (let i = 0; i < uncompressed.length; i++) {
      let count = 1;
      for (let j = i; j < uncompressed.length; j++) {
        if (uncompressed[i] !== uncompressed[j+1]) break;
        count++;
        i++;
      }
      compressed += count === 1 ? uncompressed[i] : count + uncompressed[i];
    }

    return compressed
  }
console.log(compressed());

