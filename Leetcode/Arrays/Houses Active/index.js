function cellCompete(states, days) {
  // WRITE YOUR CODE HERE
  //if both left and right is active = 0
  //if both left and right is inactive = 0
  // otherwise on the next iteration make it 1
  let i = 0;
  while (i < days) {
    let prev = 0;
    let curr = 0;
    let next = 0;
    for (let j = 0; j < states.length; j++) {
      if (j === 0) {
        prev = 0;
        curr = states[j];
        next = states[j + 1];
      } else if (j === states.length - 1) {
        prev = curr;
        curr = next;
        next = 0;
      } else {
        prev = curr;
        curr = next;
        next = states[j + 1];
      }

      if (prev === next) {
        states[j] = 0;
      } else {
        states[j] = 1;
      }
    }

    i++;
  }

  return states;
}
// FUNCTION SIGNATURE ENDS
