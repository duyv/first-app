export async function getPhoto() {
  const json = await fetch("https://jsonplaceholder.typicode.com/photos");
  const result = await json.json();
  console.log("result::", result);
  return result;
}

export async function getTodoFailed() {
  const json = await fetch("https://jjsonplaceholder.typicode.com/abc");
  const result = await json.json();
  console.log("result::", result);
  return result;
}
