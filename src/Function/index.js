// eslint-disable-next-line import/no-absolute-path
const palindrome = require('/opt/nodejs/palindrome');

exports.handler = async event => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  // Can  also  dynamically pass this value in via the  event object
  const words = 'This string should be reversed';
  const response = palindrome(words);

  return {
    statusCode: 200,
    headers: {},
    response: JSON.stringify(response)
  };
};
