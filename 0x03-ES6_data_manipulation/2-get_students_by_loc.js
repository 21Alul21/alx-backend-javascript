export default function getStudentsByLocation(arr, location) {
  const filteredArr = arr.filter((obj) => obj.location === location);
  return filteredArr;
}
