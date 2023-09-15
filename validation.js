// Sample data for demonstration (replace with actual data retrieval logic)
const transactionData = [
    {
        studentName: "John Doe",
        studentID: "12345",
        course: "Computer Science",
        semester: "1",
        cohort: "2023",
        feeAmount: "2.5",
        dateOfTransaction: "2023-09-15",
        transactionReference: "TX123",
    },
    {
        studentName: "Jane Smith",
        studentID: "67890",
        course: "Engineering",
        semester: "2",
        cohort: "2022",
        feeAmount: "3.0",
        dateOfTransaction: "2023-09-14",
        transactionReference: "TX456",
    },
    // Add more sample data as needed
];

// Function to populate the validation table with transaction data
function populateValidationTable() {
    const tableBody = document.querySelector("#validationTable tbody");

    // Loop through the transaction data and create table rows
    transactionData.forEach((transaction) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.studentName}</td>
            <td>${transaction.studentID}</td>
            <td>${transaction.course}</td>
            <td>${transaction.semester}</td>
            <td>${transaction.cohort}</td>
            <td>${transaction.feeAmount} ETH</td>
            <td>${transaction.dateOfTransaction}</td>
            <td>${transaction.transactionReference}</td>
            <td>
                <button class="validateButton">Validate</button>
                <button class="rejectButton">Reject</button>
            </td>
        `;

        // Add event listeners for validate and reject buttons
        const validateButton = row.querySelector(".validateButton");
        validateButton.addEventListener("click", () => {
            // Handle validation logic here
            alert(`Transaction validated: ${transaction.transactionReference}`);
        });

        const rejectButton = row.querySelector(".rejectButton");
        rejectButton.addEventListener("click", () => {
            // Handle rejection logic here
            alert(`Transaction rejected: ${transaction.transactionReference}`);
        });

        // Append the row to the table
        tableBody.appendChild(row);
    });
}

// Call the function to populate the validation table when the page loads
window.addEventListener("load", populateValidationTable);
