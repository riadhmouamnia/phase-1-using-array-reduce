const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//reducer
const totalBatteries = batteryBatches.reduce(
  (accumulator, value) => accumulator + value,
  0
);
