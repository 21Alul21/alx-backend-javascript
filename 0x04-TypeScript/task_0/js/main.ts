interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const student1: Student = {
    firstName: 'Austin',
    lastName: 'Alul',
    age: 2700,
    location: 'Lag0s'
}

const student2: Student = {
    firstName: 'Paul',
    lastName: 'Duke',
    age: 2800,
    location: 'Lagos'
}

const studentsList: Student[] = [student1, student2];

// Render a table using vanilla JavaScript
const table = document.createElement('table');

// Create header row
const headerRow = table.insertRow();
Object.keys(student1).forEach(key => {
    const headerCell = document.createElement('th');
    headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    headerRow.appendChild(headerCell);
});

// Iterate over each student in the studentsList array
studentsList.forEach(student => {
    const row = table.insertRow();
    
    // Iterate over each property of the student object
    Object.values(student).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value.toString();
    });
});

// Append the table to the document body
document.body.appendChild(table);
