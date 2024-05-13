export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    console.log('hello');
    resolve('the response');
  }, 200)
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      console.error('error:', error);
    });
}
