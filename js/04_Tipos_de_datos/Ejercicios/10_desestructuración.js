// Ejercicio real de desestructuración utilizando html, css y js, este ejemplo muestra cómo la asignación desestructurante puede ser útil para manejar objetos complejos, como un menú de navegación en una aplicación web. En este caso, la función displayMenu toma un objeto menu como argumento y utiliza la sintaxis de desestructuración para extraer las propiedades title, items e isOpen del objeto. Luego, la función muestra esta información en la consola de una manera clara y organizada.

const menu = {
  title: 'Menu',
  items: ['Home', 'About', 'Contact'],
  isOpen: true
};

function displayMenu({ title, items, isOpen }) {
  const menuElement = document.createElement('div');
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  menuElement.appendChild(titleElement);

  const itemsList = document.createElement('ul');
  items.forEach(item => {
    const itemElement = document.createElement('li');
    itemElement.textContent = item;
    itemsList.appendChild(itemElement);
  });
  menuElement.appendChild(itemsList);

  menuElement.style.display = isOpen ? 'block' : 'none';
  document.body.appendChild(menuElement);

}

// resultado: se muestra el menú en la página web con el título "Menu" y los elementos "Home", "About" y "Contact". El menú se muestra u oculta según el valor de isOpen.

displayMenu(menu);




