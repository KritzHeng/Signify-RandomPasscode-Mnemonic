const bip39 = require('bip39');
const sodium = require('libsodium-wrappers-sumo');
const { randomPasscode } = require('signify-ts');

(async () => {
  // Initialize libsodium
  await sodium.ready;

  // Generate a random passcode
  const originalPasscode = randomPasscode();
  console.log('Original Passcode:', originalPasscode);

  // Convert passcode to Uint8Array
  const passcodeUint8Array = sodium.from_string(originalPasscode);

  // Convert passcode to Base64
  const passcodeBase64 = sodium.to_base64(passcodeUint8Array);

  // Create a buffer from the Base64 string
  const buffer = new Uint8Array(32);
  buffer.set(sodium.from_base64(passcodeBase64));

  // Convert the buffer to hex
  const bufferHex = sodium.to_hex(buffer);

  // Convert the hex value to mnemonic code
  const mnemonic = bip39.entropyToMnemonic(bufferHex);
  console.log('Mnemonic Code:', mnemonic);

  // Convert mnemonic back to entropy (hex)
  const entropyHex = bip39.mnemonicToEntropy(mnemonic);

  // Convert the hex back to Uint8Array
  const entropyUint8Array = sodium.from_hex(entropyHex);

  // Convert Uint8Array to Base64 string
  const recoveredBase64 = sodium.to_base64(entropyUint8Array.subarray(0, 32));

  // Convert Base64 string back to the original passcode
  const recoveredPasscodeUint8Array = sodium.from_base64(recoveredBase64);
  const recoveredPasscode = sodium.to_string(recoveredPasscodeUint8Array);

  // Display the recovered passcode
  console.log('Recovered Passcode:', recoveredPasscode);
})();
