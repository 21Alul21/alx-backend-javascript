export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const idArr = arr.map((value) => value.id);
  return idArr;
}
