const initState = [{
  id: "001",
  username: "tom",
  age: 18,
}]
export default function PersonReducer(preState = initState, action) {
  console.log(action);
  const { type, data } = action;
  switch (type) {
    case "add_person":
      return [data, ...preState]
    default:
      return preState
  }
}