export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}






export default function getFullResponseFromAPI(success) {
    const my_prom = new Promise((resolve, reject) =>{
        if(success) {
            resolve({status: 200, body: 'Success'})
        }
        else{
            reject(new Error('The fake API is not working currently'))
        }
    });

    return my_prom;
}