const correctPassword = "admin123";  // Password for journal access
let journalEntries = [];

function checkPassword() {
    const enteredPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("journal-container").style.display = "block";
        loadEntries();
    } else {
        errorMessage.textContent = "Incorrect password, please try again.";
    }
}

function saveEntry() {
    const entryText = document.getElementById("entry-text").value;
    const category = document.getElementById("category").value;

    if (entryText.trim() === "") {
        alert("Please write something before saving.");
        return;
    }

    const entry = {
        text: entryText,
        category: category,
        date: new Date().toLocaleString(),
    };

    journalEntries.push(entry);
    document.getElementById("entry-text").value = "";  // Clear text area
    displayEntry(entry);
}

function displayEntry(entry) {
    const entriesList = document.getElementById("entries-list");
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");

    entryDiv.innerHTML = `
        <strong>${entry.date}</strong> - <em>${entry.category}</em>
        <p>${entry.text}</p>
    `;
    entriesList.appendChild(entryDiv);
}

function loadEntries() {
    const entriesList = document.getElementById("entries-list");
    entriesList.innerHTML = "";  // Clear existing entries

    journalEntries.forEach(entry => {
        displayEntry(entry);
    });
}

function logout() {
    document.getElementById("journal-container").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}
