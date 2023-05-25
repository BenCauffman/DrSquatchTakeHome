/*
Takes in the API response from the bundle list. Iterates through products contained
in bundles. And returns out a new object that contains this new scent property to be
used by the frontend.
*/

async function getBundlesWithMoreInfo() {
  const json = await fetch(
    "https://ae3t7l1i79.execute-api.us-east-1.amazonaws.com/bundles"
  );

  if (!json.ok) {
    throw new Error(
      "Much like Dr. Squatch's namesake, the products can't be found"
    );
  }

  const res = await json.json();

  const newBundleList = [...res]

  /* iterates through the returned list of bundles. For each bundle, it iterates
  through the products that it contains, and generates a new property on the bundle
  object containing this summary
  */

  for (let i = 0; i < res.length; ++i) {
    newBundleList[i].scents = await getAllScents(res[i]);
    newBundleList[i].originalPrice = await getAllPrices(res[i])
  }

  return newBundleList;
}

// gets the array of scents for each product in the bundle
async function getAllScents(bundle) {
  const promises = [];

  async function getScents(product) {
    const json = await fetch(
      `https://ae3t7l1i79.execute-api.us-east-1.amazonaws.com/product/${product}`
    );

    if (!json.ok) {
      throw new Error(
        "Much like Dr. Squatch's namesake, the products can't be found"
      );
    }
    const res = await json.json();

    return res.scent_profile;
  }

  for (let i = 0; i < bundle.products_included.length; ++i) {
    promises.push(getScents(bundle.products_included[i]));
  }
  const scents = await Promise.all(promises);

  const newArray = scents.flat();
  const scentSet = new Set(newArray);

  return [...scentSet];
}

async function getAllPrices(bundle) {
  const promises = [];

  async function getPrices(product) {
    const json = await fetch(
      `https://ae3t7l1i79.execute-api.us-east-1.amazonaws.com/product/${product}`
    );

    if (!json.ok) {
      throw new Error(
        "Much like Dr. Squatch's namesake, the products can't be found"
      );
    }
    const res = await json.json();

    return res.price;
  }

  for (let i = 0; i < bundle.products_included.length; ++i) {
    promises.push(getPrices(bundle.products_included[i]));
  }
  const prices = await Promise.all(promises);

  const newPrice = prices.reduce((acc, curr) => acc += curr);

  return newPrice;
}


export default getBundlesWithMoreInfo;
