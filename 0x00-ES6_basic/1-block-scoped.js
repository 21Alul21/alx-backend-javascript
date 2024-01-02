export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var mtask = true;
    var mtask2 = false;
  }

  return [task, task2];
}
