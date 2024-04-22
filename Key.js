// Function to fetch keys from the URL asynchronously
async function fetchKeys(id) {
  try {
    const response = await fetch('https://livecrichdkeys.pages.dev/livecrichd.js/?id=' + id);
    if (!response.ok) {
      throw new Error('Failed to fetch keys');
    }
    const keys = await response.json();
    return keys;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Function to use keys based on id
async function useKeys(id) {
  let keyId, key;
  // Fetch keys based on id
  const keys = await fetchKeys(id);
  if (keys) {
    keyId = keys.keyId;
    key = keys.key;
    // Your code logic using keyId and key goes here
    console.log('KeyId:', keyId);
    console.log('Key:', key);
  } else {
    console.error('Failed to fetch keys or keys are invalid');
  }
}

// Usage example
const id = 1057; // Set the id value
useKeys(id);
