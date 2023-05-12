// Select the relevant elements from the HTML page
const list = document.querySelector('#list');
const itemInput = document.querySelector('#item');
const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');

// Keep track of the current background color
let backgroundColor = 'white';

// Add an item to the list when the user clicks the "add" button
addButton.addEventListener('click', () => {
  // Get the text input by the user
  const itemText = itemInput.value.trim();

  // If the input is not empty, add each word as a list item
  if (itemText !== '') {
    const words = itemText.split(' ');
    for (const word of words) {
      const li = document.createElement('li');
      li.textContent = word;
      li.style.backgroundColor = backgroundColor;
      list.appendChild(li);
      // Alternate the background color for each item
      backgroundColor = (backgroundColor === 'white') ? 'yellow' : 'white';
    }
    // Clear the input box
    itemInput.value = '';
  }
});

// Remove an item from the list when the user clicks the "remove" button
removeButton.addEventListener('click', () => {
  // Get the text input by the user
  const itemText = itemInput.value.trim().toLowerCase();

  // Find the first list item that matches the input text
  const li = [...list.querySelectorAll('li')].find(li => li.textContent.toLowerCase() === itemText);

  // If a matching item was found, remove it from the list
  if (li) {
    list.removeChild(li);
    // Reset the background color to white for the remaining items
    backgroundColor = 'white';
    for (const li of list.querySelectorAll('li')) {
      li.style.backgroundColor = backgroundColor;
      backgroundColor = (backgroundColor === 'white') ? 'yellow' : 'white';
    }
    // Clear the input box
    itemInput.value = '';
  }
});
