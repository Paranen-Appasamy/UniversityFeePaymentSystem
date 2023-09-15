const contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_transactionId",
                "type": "uint256"
            }
        ],
        "name": "rejectTransaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_studentName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_studentID",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_studentEmail",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_course",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_semester",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_cohort",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_feeAmount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_dateOfTransaction",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_transactionReference",
                "type": "string"
            }
        ],
        "name": "submitTransaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "transactionId",
                "type": "uint256"
            }
        ],
        "name": "TransactionRejected",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "transactionId",
                "type": "uint256"
            }
        ],
        "name": "TransactionSubmitted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "transactionId",
                "type": "uint256"
            }
        ],
        "name": "TransactionValidated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_transactionId",
                "type": "uint256"
            }
        ],
        "name": "validateTransaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "transactionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "transactions",
        "outputs": [
            {
                "internalType": "string",
                "name": "studentName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "studentID",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "studentEmail",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "course",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "semester",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "cohort",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "feeAmount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "dateOfTransaction",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "transactionReference",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "validated",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "rejected",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]; // ABI of your smart contract

exports.contractABI = contractABI;
