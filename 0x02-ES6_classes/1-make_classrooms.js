import Classroom from './0-classroom';

export default function initializeRooms() {
  const obj1 = new Classroom(19);
  const obj2 = new Classroom(20);
  const obj3 = new Classroom(31);
  const array = [obj1, obj2, obj3];
  return array;
}
