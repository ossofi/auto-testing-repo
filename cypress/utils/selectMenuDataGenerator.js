export function generateSelectData() {
    const colorsOld = ['Yellow', 'Blue', 'Green', 'Red'];
    const titles = ['Prof.'];
    const multiColors = ['Green', 'Blue'];
    const reactColor = 'Blue';
  
    return {
      color: colorsOld[Math.floor(Math.random() * colorsOld.length)],
      title: titles[0],
      multiColors,
      reactColor,
    };
  }