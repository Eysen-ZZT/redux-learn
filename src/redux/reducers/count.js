const initState = 0

export default function countReducer(prevState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case 'increase':
      return prevState + data;
    case 'decrease':
      return prevState - data;
    case 'multiplyBy':
      return prevState * data;
    default:
      return prevState;
  }
}