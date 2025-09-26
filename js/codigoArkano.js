let result = prompt ("Ingrese los simbolos:")
function decodeSpell(result) {
    const symbolValues = {
      '☽': 1,
      '☾': 5,
      '⚕': 50,
      '⚡': 100
    };
  
    for (let char of result) {
      if (!(char in symbolValues)) {
        return NaN;
      }
    }
  
    let total = 0;
    for (let i = 0; i < result.length; i++) {
      const currentValue = symbolValues[result[i]];
      if (i < result.length - 1) {
        const nextValue = symbolValues[result[i + 1]];
        if (currentValue < nextValue) {
          total -= currentValue;
        } else {
          total += currentValue;
        }
      } else {
        total += currentValue;
      }
    }
    
    return total;
  }

  alert(decodeSpell(result))