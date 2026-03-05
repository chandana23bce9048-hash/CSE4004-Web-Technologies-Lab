const API = "http://localhost:3000/notes";

const form = document.getElementById("noteForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const note = {
        title: document.getElementById("title").value,
        subject: document.getElementById("subject").value,
        description: document.getElementById("description").value
    };

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    });

    form.reset();
    loadNotes();
});


async function loadNotes() {

    const res = await fetch(API);
    const notes = await res.json();

    const notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";

    notes.forEach(note => {

        notesDiv.innerHTML += `
        <div class="note">
            <h3>${note.title}</h3>
            <p><b>Subject:</b> ${note.subject}</p>
            <p>${note.description}</p>

            <button onclick="deleteNote('${note._id}')">Delete</button>
            <button onclick="editNote('${note._id}','${note.title}','${note.description}')">Edit</button>
        </div>
        `;
    });
}


async function deleteNote(id) {

    await fetch(API + "/" + id, {
        method: "DELETE"
    });

    loadNotes();
}


async function editNote(id, title, description) {

    const newTitle = prompt("Edit Title", title);
    const newDesc = prompt("Edit Description", description);

    await fetch(API + "/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: newTitle,
            description: newDesc
        })
    });

    loadNotes();
}


loadNotes();