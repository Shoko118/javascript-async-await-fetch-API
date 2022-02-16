async function myAsyncFunction() {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/2";
    let resp = await fetch(url);
    // waits until the request completes..
    console.log("THE RESPONSE", resp.ok, "THE RESPONE STATUS", resp.status);
    let data = await resp.json();
    // waits until the request completes..
    console.log("THE DATA", data);
  } catch (err) {
    console.err(err);
  }
}
myAsyncFunction();

// PROMISE ARRAY
async function myPromiseAllFunction() {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";

    const arrayUrl = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);
    console.log(
      "THE RESPONSE",
      arrayUrl.ok,
      "THE RESPONE STATUS",
      arrayUrl.status
    );

    const dataPromiseAll = arrayUrl.map((arrayUrl) => arrayUrl.json());
    const finalData = await Promise.all(dataPromiseAll);
    console.log(finalData);
  } catch (err) {
    console.err(err);
  }
}
myPromiseAllFunction();
