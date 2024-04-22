addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// Define an object with clearkeys for different content IDs
const clearkeys = {
  '24': 'gHVwqoqia90xO49esgyC/g:lIvu3h74VkqGJjcVpYxu1w',
  '35': 'bZnQjdmN2+ARduCet34Clg:xx3WP0EaUJmESnP76FDJ',
  '78': '9uPipJUMdzdZLVSiRePPtg:wzBKVUHpUd64IDdmzzLIyg',
  '81': 'HU1SaYCA1FOwMspEJ3/SdA:fYzG7jyaWoKgBxd581GppQ',
  '150': 'lthNwSQ7fNnFaRQruovY3w:0vwcpkZ5UjyXiXoMW5l3fw',
  '170': 'iHc8GDLxJqz84BFNRe84hg:RXul4t1IUAO3vvH5ZUVqJQ',
  '171': '1rlDf1wazeQoQRX2y+Dzxg:dSpFsqR0Wm61cDquOu6kKw',
  '235': 'iurfDO7i+vjpx0rlRJ0dFw:+Uh2ul4uWjep1XIMoek1Wg',
  '246': 'lQ308kJQTx4WnaSeTMkYEA:D69SGOgFWZmwIztx92h75g',
  '462': '3HjqtGJk1Fel2w8MQpzkpg:HMNh4XCEWTaup7lcbvtHjg',
  '463': 'xEAeregga+GoF1B6NFy1jw:BueInHKrW2yrKxKfyaJJ3A',
  '464': '/Ya0mtIF3sa1K+SOF05Rkg:RCi+eqz7VXSSx/pVLD7L8Q',
  '980': '87Wt9ap5KNY3JE2Kn8+cXw:2uNocgAjVoy187XdN+oQRQ',
  '1033': 's3LuCyguK8qtMXAiicszjw:GS3V8HedWYOjqhgnap',
  // Add more content IDs and their respective clearkeys here
}

// Function to validate access (e.g., check for authentication)
function validateAccess() {
  // Implement your access validation logic here
  // Return true if access is allowed, false otherwise
  // You may check session variables, authentication tokens, or any other method of validation
  return false; // Change this to your validation logic
}

async function handleRequest(request) {
  // Access is allowed
  if (validateAccess()) {
    // Retrieve the content ID from the query string
    const url = new URL(request.url)
    const contentID = url.searchParams.get('contentID')

    // Check if the content ID exists in the clearkeys object
    if (contentID && clearkeys[contentID]) {
      // Content ID found, retrieve the clearkey
      const clearkey = clearkeys[contentID]
      
      // Return the clearkey
      return new Response(clearkey)
    } else {
      // Content ID not found
      return new Response('Invalid content ID.', { status: 400 })
    }
  } else {
    // Access is not allowed, redirect to Telegram channel
    const telegramChannelURL = 'https://telegram.me/livecrichdd';
    return Response.redirect(telegramChannelURL, 302);
  }
}
