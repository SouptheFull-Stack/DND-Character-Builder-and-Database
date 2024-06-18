const charForm = document.getElementById("char-form");
const classDropdown = document.getElementById("char-class");
const subclassDropdown = document.getElementById("char-subclass");
const charImageForm = document.getElementById("char-image-form");

// EVENT LISTENER FUNCTION TO TRIGGER WHEN CLASS IS SELECTED IN DROPDOWN FORM
classDropdown.addEventListener("change", async function (event) {
  // get handle on the selected class
  let selectedClassID = event.target.value; // RESEARCH MORE ON EVENT.TARGET
  console.log(selectedClassID);

  // fetch the array objects
  const response = await fetch("/api/subclasses/classID/" + selectedClassID, {
    method: "GET",
  });
  const subclasses = await response.json();
  console.log(subclasses);
  subclassDropdown.innerHTML = ""; // clearing the data so it doesn't leave the previous class' subclasses
  // subclassDropdown.options.add(new Option("Select a subclass..."));
  const placeholder = new Option("Select a subclass...");
  placeholder.disabled = true;
  placeholder.selected = true;
  subclassDropdown.options.add(placeholder);
  // loops through each object and populates each into the dropdown list options
  for (const subclass of subclasses) {
    subclassDropdown.options.add(new Option(subclass.name, subclass.id));
  }
});

// FORM SUBMIT FUNCTION FOR CREATING A CHARACTER
const createCharHandler = async (event) => {
  event.preventDefault();

  const charName = document.querySelector("#char-name").value.trim();
  const charAge = document.querySelector("#char-age").value.trim() || null;
  const charAlign = document.querySelector("#char-alignment").value;
  const charClass = document.querySelector("#char-class").value;
  const charSubclass = document.querySelector("#char-subclass").value;
  const charRace = document.querySelector("#char-race").value;
  const charUser = charForm.dataset.userid;

  // retrieve from the DOM the character data
  if (charName && charAlign && charClass && charSubclass && charRace) {
    // post the info to the specified end point
    const response = await fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify({
        charName,
        charAge,
        charAlign,
        charClass,
        charSubclass,
        charRace,
        charUser,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // if the response was ok, redirect the user to the profile page
    // otherwise alert the user that character creation failed
    if (response.ok) {
      document.location.replace("/characters");
    } else {
      alert(`Failed to create character`);
    }
  }
};

charForm.addEventListener("submit", createCharHandler);