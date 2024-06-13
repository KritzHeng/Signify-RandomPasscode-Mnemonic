# Passcode to Mnemonic Converter

This project demonstrates how to convert a passcode to a mnemonic code using `libsodium-wrappers-sumo` and `bip39`, and then convert the mnemonic back to the original passcode. Additionally, it derives an Ethereum address from the mnemonic. The project also uses the `signify-ts` library to generate a random passcode.

## Prerequisites

- Node.js (v18.18.2 or later)
- npm (Node Package Manager)


## Usage

1. **Run the script:**

    ```bash
    node index.js
    ```

2. **Output:**

    The script will generate a random passcode, convert it to a mnemonic code, convert the mnemonic back to the original passcode, and derive an Ethereum address from the mnemonic. The output will be displayed in the console.

## Code Explanation

### Dependencies

- `bip39`: Library for BIP-39 mnemonic code generation.
- `libsodium-wrappers-sumo`: Library for cryptographic operations.
- `signify-ts`: Library for generating random passcodes.
- `ethereumjs-wallet`: Library for Ethereum wallet operations.
- `hdkey`: Library for hierarchical deterministic (HD) key generation.
- `ethereumjs-util`: Utility functions for Ethereum.

### Script

The script performs the following steps:

1. Initializes `libsodium`.
2. Generates a random passcode using `randomPasscode` from `signify-ts`.
3. Converts the passcode to a `Uint8Array`.
4. Converts the passcode to Base64.
5. Creates a buffer from the Base64 string.
6. Converts the buffer to hex.
7. Converts the hex value to a mnemonic code using `bip39`.
8. Converts the mnemonic back to entropy.
9. Converts the entropy back to a `Uint8Array`.
10. Converts the `Uint8Array` to a Base64 string.
11. Converts the Base64 string back to the original passcode.
12. Converts the mnemonic to a seed.
13. Derives a private key from the seed using `hdkey`.
14. Derives an Ethereum address from the private key.
15. Displays the original passcode, mnemonic code, recovered passcode, and Ethereum address.

## Example Output

```plaintext
Original Passcode: 0ADwFQWdX35U9jo9S2C71CzT
Mnemonic Code: aspect celery injury cheese arrest stairs drift matrix mirror copy small student eager adult snow you toilet menu regret polar display tornado math original
Recovered Passcode: 0ADwFQWdX35U9jo9S2C71CzT
Ethereum Address: 0xYourEthereumAddress
