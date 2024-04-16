export default function getStudentIdsSum(arr) {
  const idSum = arr.reduce((accumulator, obj) => accumulator + obj.id, 0);
  return idSum;
}
