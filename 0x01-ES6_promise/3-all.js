import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const fnUpload = uploadPhoto();
  const fnUser = createUser();
  Promise.all([fnUpload, fnUser])
    .then(([photoData, userData]) => {
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
