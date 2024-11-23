const greeting = () => prompt("Введите имя пользователя");
   
try {
  if (!greeting()) {
    const error = new Error('Имя обязательно для заполнения')
    throw error
  }
  
} catch(error) { 
  alert(error);
}