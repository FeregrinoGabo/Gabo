function generateGreeting(nombre) {
    const hour = new Date().getHours();
  
    if (hour >= 6 && hour < 12) {
      return `Buenos días, ${nombre}.`;
    } else if (hour >= 12 && hour < 18) {
      return `Buenas tardes, ${nombre}.`;
    } else {
      return `Buenas noches, ${nombre}.`;
    }
  }
  
  const nombre = "Gabriel";
  
  console.log(generateGreeting(nombre)); 
  