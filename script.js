// --- Cyberware Help Search Filter --- //

// Get elements
const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.button-card');
const contactLink = document.querySelector('footer.bottom-panel');
const noResults = document.getElementById('noResults');

// Listen for typing or clearing in the search bar
searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.toLowerCase().trim();
  let foundMatch = false;

  // Loop through all help topic cards
  cards.forEach(card => {
    const cardText = card.innerText.toLowerCase();

    if (cardText.includes(searchText) && searchText !== "") {
      card.style.display = 'block';
      foundMatch = true;
    } else if (searchText === "") {
      card.style.display = 'block'; // Show all when search is empty
    } else {
      card.style.display = 'none';
    }
  });

  // Handle the footer (Contact Us)
  if (contactLink) {
    const contactText = contactLink.innerText.toLowerCase();

    if (contactText.includes(searchText) && searchText !== "") {
      contactLink.style.display = 'block';
      foundMatch = true;
    } else if (searchText === "") {
      contactLink.style.display = 'block'; // Show again if search is empty
    } else {
      contactLink.style.display = 'none';
    }
  }

  // Show or hide "No results found"
  if (!foundMatch && searchText !== "") {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
  }
});