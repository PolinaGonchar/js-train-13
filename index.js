// Task 1
/**
 * The `complexConvert` function takes an object with numeric values and increments them by 1.
 *
 *  data - JSON data for processing.
 * Returns - JSON data in which all numeric values are incremented by 1.
 */
function complexConvert(data) {
  let newObj = {};
  let obj = JSON.parse(data);
  let keys = Object.keys(obj);
  for (let key of keys) {
    let value = obj[key];
    if (typeof value === "number") {
      newObj[key] = value + 1;
    } else {
      newObj[key] = value;
    }
  }
  return JSON.stringify(newObj);
}

console.log("Task: 1 ==============================");
const data = {
  name: "John",
  age: 30,
  city: "New York",
  grades: {
    math: 90,
    science: 80,
    history: 70,
  },
};
console.log(complexConvert(JSON.stringify(data)));
// Output
// {"name":"John","age":31,"city":"New York","grades":{"math":90,"science":80,"history":70}}

// Task 2

/**
 * The `manipulateUrl` function takes a URL string and performs various operations on it.
 *
 * url - The URL string.
 *
 * Returns an object containing various URL properties.
 *  href: // Full URL.
    protocol: // URL protocol.
    host:  // URL host.
    pathname // URL path.
    search // URL query string.
    params: Array of URL parameters as key-value pairs.
 */
function manipulateUrl(url) {
  let urlObj = new URL(url);
  urlObj.protocol = 'https';
  urlObj.host = 'newhost.com';
  urlObj.searchParams.append('newParam', 'newValue');
  if (urlObj.searchParams.has('oldParam')) {
    urlObj.searchParams.delete('oldParam');
  }
  return {
    href: urlObj.href,
    protocol: urlObj.protocol,
    host: urlObj.host,
    pathname: urlObj.pathname,
    search: urlObj.search,
    params: [...urlObj.searchParams.entries()],
  };
}

console.log("Task: 2 ==============================");

// Example usage of the manipulateUrl function
let url = "http://example.com/path?param1=value1&param2=value2";

console.log(manipulateUrl(url));
// Output
// {
//   href: 'https://newhost.com/path?param1=value1&param2=value2&newParam=newValue',
//   protocol: 'https:',
//   host: 'newhost.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2&newParam=newValue',
//   params: [
//     [ 'param1', 'value1' ],
//     [ 'param2', 'value2' ],
//     [ 'newParam', 'newValue' ]
//   ]
// }

// Task 3

/**
 * The `searchParamsURL` function creates a new URL object from an input URL string and returns an object containing the URL's search parameters.
 *  url - The input URL string to analyze.
 *  Returns an object with the URL's search parameters.
 */
function searchParamsURL(url) {
  let urlObj = new URL(url);
  let searchParams = urlObj.searchParams;
  let params = new Map();
  for (let param of searchParams) {
    params.set(param[0], param[1]);
  }
  return params;
}

console.log("Task: 3 ==============================");

// Example usage of the searchParamsURL function:
console.log(
  searchParamsURL(
    "https://example.com/pathname?param1=value1&param2=value2&param3=value3"
  )
);
// Output
// Map(3) {
//   'param1' => 'value1',
//   'param2' => 'value2',
//   'param3' => 'value3'
// }

// Task 4

/**
 * The `manipulateSearchParams` function should take an object of parameters and a new URL string.
 * paramsObj (object) - The object containing search parameters.
 * newUrl (string) - The new URL string.
 *
 * The function returns a new URL string with the searchParams property updated with parameters from paramsObj.
 */
function manipulateSearchParams(paramsObj, newUrl) {
  let urlObj = new URL(newUrl);
  let keys = Object.keys(paramsObj);
  for (let key of keys) {
    urlObj.searchParams.set(key, paramsObj[key]);
  }
  return urlObj.href;
}

// Example usage of the manipulateSearchParams function
console.log("Task: 4 ==============================");

console.log(
  manipulateSearchParams(
    { param1: "value1", param2: "value2" },
    "https://example.com/pathname"
  )
);
// Output: https://example.com/pathname?param1=value1&param2=value2

// Task 5

/**
 * The `deleteSearchParams` function should take an array of parameter keys and a URL string.
 * keys (array) - The array containing the keys of search parameters to delete.
 * url (string) - The URL string.
 *
 * The function returns a new URL string with the specified search parameters removed.
 */
function deleteSearchParams(keys, url) {
  let newObj = new URL(url);
  for (let key of keys) {
    newObj.searchParams.delete(key);
  }
  return newObj.href;
}

// Example usage of the deleteSearchParams function
console.log("Task: 5 ==============================");

console.log(
  deleteSearchParams(
    ["param1", "param2"],
    "https://example.com/pathname?param1=value1&param2=value2"
  )
);
// Output: https://example.com/pathname

// Task 6

/**
 * The `createURLWithParams` function takes an object of search parameters and a base URL string.
 * params (object) - The object whose keys and values become the search parameters of the new URL string.
 * url (string) - The base URL string.
 *
 * The function returns a new URL string with search parameters from the params object added.
 */
function createURLWithParams(params, url) {
  let urlObj = new URL(url);
  for (let key in params) {
    urlObj.searchParams.set(key, params[key]);
  }
  return urlObj.href;
}

// Example usage of the createURLWithParams function
console.log("Task: 6 ==============================");

console.log(
  createURLWithParams(
    { param1: "value1", param2: "value2" },
    "https://example.com"
  )
);
// Output: https://example.com/?param1=value1&param2=value2

// Task 7

/**
 * The `updateURLHash` function takes a URL string and a string, and updates the hash value in the URL.
 * url (string) - The URL string to update.
 * hash (string) - The new hash value.
 *
 * The function returns a new URL string with the updated hash.
 */
function updateURLHash(url, hash) {
  let urlObj = new URL(url);
  urlObj.hash = hash;
  return urlObj.href;
}

// Example usage of the updateURLHash function
console.log("Task: 7 ==============================");

console.log(updateURLHash("https://example.com", "newHash"));
// Output: https://example.com/#newHash

// Task 8

/**
 * The `appendSearchParam` function takes a URL string, a key, and a value, and adds a new search parameter to the URL.
 * url (string) - The URL string to which the new search parameter should be added.
 * key (string) - The key of the new search parameter.
 * value (string) - The value of the new search parameter.
 *
 * The function returns a new URL string with the added search parameter.
 */
function appendSearchParam(url, key, value) {
  let urlObj = new URL(url);
  urlObj.searchParams.append(key, value);
  return urlObj.href;
}

// Example usage of the appendSearchParam function
console.log("Task: 8 ==============================");

console.log(appendSearchParam("https://example.com", "newParam", "newValue"));
// Output: https://example.com/?newParam=newValue

// Task 9
/**
 * The `modifyURLParameters` function accepts a URL and a dictionary of search parameters.
 * The function adds these parameters to the URL, and if such a parameter already exists, it replaces it.
 *
 * url - The URL that needs to be modified.
 * params - A dictionary of search parameters.
 * Returns - A new URL with updated search parameters.
 */
function modifyURLParameters(url, params) {
  let urlObj = new URL(url);
  for(let key in params){
    let value = params[key];
    urlObj.searchParams.set(key, value);
  }
  return urlObj.href;
}

console.log("Task: 9 ==============================");

// Example usage of the modifyURLParameters function
let modifiedURL = modifyURLParameters("https://example.com/?param1=oldValue1", {
  param1: "newValue1",
  param2: "newValue2",
});
console.log(modifiedURL);
// Output: https://example.com/?param1=newValue1&param2=newValue2

// Task 10
/**
 * The `checkURLParameters` function accepts a URL and a set of search parameters.
 * The function checks if these parameters are present in the URL.
 *
 * url - The URL that needs to be checked.
 * params - A set of parameters that need to be checked.
 * Returns - An object whose keys correspond to the keys of the input object,
 *           and the values are boolean indicating the presence of the corresponding parameter in the URL.
 */
function checkURLParameters(url, params) {
  let urlObj = new URL(url);
  let result = {};
  for(let param of params){
    result[param] = urlObj.searchParams.has(param);
  }
  return result;
}

console.log("Task: 10 ==============================");

// Example usage of the checkURLParameters function
let params = new Set(["param1", "param2", "param3", "param4"]);

console.log(
  checkURLParameters(
    "https://example.com/?param1=value1&param2=value2&param3=value3",
    params
  )
);
// Output: { param1: true, param2: true, param3: true, param4: false }

// Task 11

/**
 * The `processURL` function accepts a URL and an object with parameters and settings for processing the URL.
 * url (string) - The URL that needs to be processed.
 * options (object) - An object that contains parameters and settings for processing the URL.
 *
 * The function returns a new URL that is formed based on the input URL and the processing parameters.
 */
function processUrl(url, options) {
  let urlObj = new URL(url);
  if (options.searchParams) {
    for (let key in options.searchParams) {
      urlObj.searchParams.append(key, options.searchParams[key]);
    }
  }
  if (options.protocol) {
    urlObj.protocol = options.protocol;
  }
  if (options.host) {
    urlObj.host = options.host;
  }
  return urlObj.href;
}

// Example usage of the processURL function
console.log("Task: 11 ==============================");

console.log(
  processUrl("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Output: 'http://newexample.com/path?param1=value1&param2=value2'

// Task 12
/**
 * The `manipulateQuery` function receives a URL and a dictionary with additional settings and works with the search parameters of the URL.
 *
 * url - The URL to be processed.
 * options - A dictionary with settings. Includes `append` and `delete` keys.
 *
 * Returns - A new URL with modified search parameters.
 */
function manipulateQuery(url, options) {
  let urlObj = new URL(url);
  if (options.has("append")) {
    for (let [key, value] of options.get("append")) {
      urlObj.searchParams.append(key, value);
    }
  }

  if (options.has("delete")) {
    for (let value of options.get("delete")) {
      urlObj.searchParams.delete(value);
    }
  }
  return urlObj.href;
}

console.log("Task: 12 ==============================");

// Example usage of the manipulateQuery function
let options = new Map([
  [
    "append",
    new Map([
      ["param3", "value3"],
      ["param4", "value4"],
    ]),
  ],
  ["delete", ["param1", "param2"]],
]);

console.log(
  manipulateQuery(
    "https://example.com/path?param1=value1&param2=value2",
    options
  )
);
// Output: 'https://example.com/path?param3=value3&param4=value4'

// Task 13

/**
 * The `getUrlData` function accepts a URL as a string and returns information about the URL.
 * @url (string) - The URL to analyze.
 *
 * The function returns an object containing the following keys:
 * - 'origin': The origin of the URL.
 * - 'hostname': The hostname of the URL.
 * - 'port': The port of the URL.
 * - 'username': The username in the URL.
 * - 'password': The password in the URL.
 */
function getUrlData(url) {
  let urlObj = new URL(url);
  return {
    origin: urlObj.origin,
    hostname: urlObj.hostname,
    port: urlObj.port,
    username: urlObj.username,
    password: urlObj.password,
  };
}

// Example usage of the getUrlData function
console.log("Task: 13 ==============================");
console.log(getUrlData("https://username:password@example.com:8080/path"));
// Output:
// {
//   origin: 'https://example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   username: 'username',
//   password: 'password'
// }

// Task 14

/**
 * The `sortUrlParams` function accepts a URL and returns a new URL with the search parameters sorted.
 * @url (string) - The URL to analyze.
 *
 * The function returns a new URL with search parameters sorted by keys in ascending order.
 */
function sortUrlParams(url) {
  let urlObj = new URL(url);
  let paramsArray = Array.from(urlObj.searchParams.entries());
  paramsArray.sort();
  urlObj.search = "";
  paramsArray.forEach(([key, value]) => {
    urlObj.searchParams.append(key, value);
  });
  return urlObj.href;
}

// Example usage of the sortUrlParams function
console.log("Task: 14 ==============================");
console.log(
  sortUrlParams("https://example.com/path?param2=value2&param1=value1")
);
// Output: 'https://example.com/path?param1=value1&param2=value2'

// Task 15

/**
 * The `getURLValues` function accepts a URL and returns an array of search parameter values.
 * url - The URL to analyze.
 * Returns - An array of search parameter values.
 */
function getURLValues(url) {
  let urlObj = new URL(url);
  let URLSearchParams = urlObj.searchParams;
  let keys = URLSearchParams.keys();
  let arraySearchParams = [];
  for (let key of keys){
    arraySearchParams.push(...URLSearchParams.getAll(key));
  }
  return arraySearchParams;
}

// Example usage of the getURLValues function
console.log("Task: 15 ==============================");
console.log(
  getURLValues(
    "https://example.com/path?param1=value1&param2=value2&param3=value3"
  )
);// Output: [ 'value1', 'value2', 'value3' ]

// Task 16

/**
 * The `getUrlKeys` function accepts a URL and returns an array of the search parameter keys.
 * @url (string) - The URL to analyze.
 *
 * The function returns an array containing all the search parameter keys.
 */
function getUrlKeys(url) {
  let urlObj = new URL(url);
  let keysArray = Array.from(urlObj.searchParams.keys());
  return keysArray;
}

// Example usage of the getUrlKeys function
console.log("Task: 16 ==============================");
console.log(getUrlKeys("https://example.com/path?param1=value1&param2=value2"));
// Output: [ 'param1', 'param2' ]
