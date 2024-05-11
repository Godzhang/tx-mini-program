export function mockApi(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("test api response after" + ms + "ms");
    }, ms);
  });
}

export function createRequest(name, ms) {
  return function () {
    return mockApi(ms).then((response) => {
      console.log(`request ${name} data, ${response}`);
      return response;
    });
  };
}
