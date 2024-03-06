export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // resolve()
    reject(Error(`${filename} cannot be processed`));
  });
}
