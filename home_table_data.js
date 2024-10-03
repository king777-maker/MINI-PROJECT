// script.js
const subjects = [
    { name: "Math", totalClasses: 50, attendedClasses: 30 },
    { name: "Physics", totalClasses: 45, attendedClasses: 35 },
    { name: "Chemistry", totalClasses: 40, attendedClasses: 30 },
    { name: "Biology", totalClasses: 38, attendedClasses: 25 },
    { name: "English", totalClasses: 42, attendedClasses: 32 },
    { name: "History", totalClasses: 36, attendedClasses: 28 },
    { name: "Geography", totalClasses: 44, attendedClasses: 36 },
    { name: "Computer Science", totalClasses: 48, attendedClasses: 40 },
    { name: "Economics", totalClasses: 50, attendedClasses: 35 }
];

function calculateAttendance(subject) {
    const { totalClasses, attendedClasses } = subject;
    const attendancePercentage = (attendedClasses / totalClasses) * 100;

    // Remaining classes
    const classesLeft = totalClasses - attendedClasses;

    // Classes needed to reach 75% attendance
    const classesNeeded = attendancePercentage >= 75 
        ? 0 
        : Math.ceil((0.75 * totalClasses - attendedClasses) / 0.25);

    // Safe zone status
    const isInSafeZone = attendancePercentage >= 75;

    // Classes needed from remaining classes
    const classesNeededFromRemaining = isInSafeZone || classesLeft === 0
        ? 0
        : Math.max(0, Math.ceil((0.75 * totalClasses - attendedClasses) / (1 - (attendedClasses / totalClasses))));

    return {
        percentage: attendancePercentage.toFixed(2),
        needed: classesNeeded,
        classesLeft,
        neededFromRemaining: classesNeededFromRemaining,
        safeZone: isInSafeZone ? "Yes" : "No"
    };
}

function populateTable() {
    const tableBody = document.getElementById('attendance-table');
    subjects.forEach(subject => {
        const { percentage, needed, classesLeft, neededFromRemaining, safeZone } = calculateAttendance(subject);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subject.name}</td>
            <td>${subject.totalClasses}</td>
            <td>${subject.attendedClasses}</td>
            <td>${percentage}%</td>
            <td>${classesLeft}</td>
            <td>${needed > 0 ? needed : 'None'}</td>
            <td>${neededFromRemaining > 0 ? neededFromRemaining : 'None'}</td>
            <td>${safeZone}</td>
        `;
        tableBody.appendChild(row);
    });
}

window.onload = populateTable;

