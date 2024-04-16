import getListStudents from './0-get_list_students';

function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const idArr = arr.map((value) => value.id);
  return idArr;
}
