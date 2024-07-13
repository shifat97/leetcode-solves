var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (let hour of hours) {
    if (hour >= target) {
      count++;
    }
  }

  return count;
};

hours = [0, 1, 2, 3, 4];
target = 2;
const result = numberOfEmployeesWhoMetTarget(hours, target);
console.log(result);