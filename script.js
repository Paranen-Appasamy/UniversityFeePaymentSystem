const Web3 = require('web3'); // For Node.js environment
const { contractABI } = require('./contractABI');
//import Web3 from 'web3'; // For modern JavaScript (ES6+) environment

// Specify the Ethereum node's HTTP provider URL
// const web3 = new Web3('http://localhost:8545');// Replace with your Ethereum node URL
//const web3 = new Web3('http://127.0.0.1:7545'); 
const web3 = new Web3(window.ethereum);

const contractAddress = '0x244B222a0Aa1E436F18355db5f3E5f4c1580C1cD'; // Address of your deployed contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

contract.methods.someFunction().call((error, result) => {
    if (!error) {
        console.log(result);
    } else {
        console.error(error);
    }
});

const account = '0x28e3AA09E779D9557E992eFE0C82fA6d28489e64'; // The user's Ethereum address
const privateKey = '0xf10f058e709b89453bd672f6cf95fdffdf94d2dfe075deda5ae85a04ea5b23a1'; // The user's private key
const gasLimit = 200000; // Adjust based on your contract's gas requirements

const transaction = contract.methods.someStateChangingFunction(...params);
const encodedTransaction = transaction.encodeABI();

const tx = {
    from: account,
    to: contractAddress,
    data: encodedTransaction,
    gas: gasLimit,
};

web3.eth.accounts.signTransaction(tx, privateKey)
    .then((signedTx) => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction)
            .on('receipt', (receipt) => {
                console.log('Transaction receipt:', receipt);
            });
    })
    .catch((error) => {
        console.error('Transaction error:', error);
    });


// Sample code for handling form submissions and page navigation

// Reference to the payment form
const paymentForm = document.getElementById("paymentForm");

// Event listener for the payment form submission
paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(paymentForm);
    const studentName = formData.get("studentName");
    const studentID = formData.get("studentID");
    const studentEmail = formData.get("studentEmail");
    const course = formData.get("course");
    const semester = formData.get("semester");
    const cohort = formData.get("cohort");
    const feeAmount = formData.get("feeAmount");
    const dateOfTransaction = formData.get("dateOfTransaction");
    const transactionReference = formData.get("transactionReference");

    // You can perform further processing or submit the data to a smart contract here
    // Example: You can send a transaction to a smart contract to record the payment

    // For demonstration purposes, we'll show a success message
    alert("Payment transaction submitted successfully!");

    // Reset the form
    paymentForm.reset();
});

// Event listener for navigating to the login page
const loginButton = document.getElementById("loginButton");
if (loginButton) {
    loginButton.addEventListener("click", () => {
        window.location.href = "login.html"; // Replace with the actual URL of your login page
    });
}

// Event listener for navigating to the validation page
const validationButton = document.getElementById("validationButton");
if (validationButton) {
    validationButton.addEventListener("click", () => {
        window.location.href = "validation.html"; // Replace with the actual URL of your validation page
    });
}

// Event listener for navigating to the success page
const successButton = document.getElementById("successButton");
if (successButton) {
    successButton.addEventListener("click", () => {
        window.location.href = "success.html"; // Replace with the actual URL of your success page
    });
}

// Event listener for navigating to the reject page
const rejectButton = document.getElementById("rejectButton");
if (rejectButton) {
    rejectButton.addEventListener("click", () => {
        window.location.href = "reject.html"; // Replace with the actual URL of your reject page
    });
}
