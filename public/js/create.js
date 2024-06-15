const charForm = document.getElementById('char-form');

const createCharHandler = async (event) => {
  event.preventDefault();

  const charName = document.querySelector('#char-name').value.trim();
  const charAge = document.querySelector('#char-age').value.trim() || null;
  const charClass = document.querySelector('#char-class').value;
  const charRace = document.querySelector('#char-race').value;
  const charUser = charForm.dataset.userid;
  // retrieve from the DOM the character data
  if (charName && charClass && charRace) {
    // post the info to the specified end point
    const response = await fetch('/api/characters', {
      method: 'POST',
      body: JSON.stringify({ charName, charAge, charClass, charRace, charUser }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if the response was ok, redirect the user to the profile page
    // otherwise alert the user that character creation failed
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(`Failed to create character`);
    }
  }
};

// add event listeners to both forms
charForm.addEventListener('submit', createCharHandler);