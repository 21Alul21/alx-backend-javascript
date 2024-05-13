export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log('to be delayed by 2s');
      resolve('the response');
    }, 2000);
  })
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      console.error('error:', error);
    });

  return myPromise;
}
