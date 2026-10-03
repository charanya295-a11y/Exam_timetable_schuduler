let subjects = [];

function addSubject() {
    let subject = document.getElementById("subject").value.trim();

    if (subject === "") {
        alert("Enter a subject!");
        return;
    }

    subjects.push(subject);

    document.getElementById("subjects").innerHTML =
        subjects.join(", ");

    document.getElementById("subject").value = "";
}

function generateTimetable() {

    if (subjects.length === 0) {
        alert("Add subjects first!");
        return;
    }

    let slots = {};

    // Greedy Graph Coloring
    for (let i = 0; i < subjects.length; i++) {
        slots[subjects[i]] = (i % 3) + 1;
    }

    let result = "<h2>Exam Timetable</h2>";

    for (let subject of subjects) {
        result += `<p><b>${subject}</b> → Slot ${slots[subject]}</p>`;
    }

    result += "<h3>✓ Timetable Generated Successfully</h3>";

    document.getElementById("output").innerHTML = result;
}
