const consulta = () =>
  new Promise((resolve, reject) => {
    const flag = false;
    if (flag) {
      reject("No se puede");
    } else {
      setTimeout(() => {
        console.log("Hola");
        resolve();
      }, 3000);
    }
  });


  const saludo = () => {
      consulta().then((resp) =>
        console.log("Alex")
      ).catch(err => console.log(err))
  };

const saludo2 = async () => {
  try {
    await consulta();
    console.log("Alex");
  } catch (err) {
    console.log(err);
  }
};

saludo();
