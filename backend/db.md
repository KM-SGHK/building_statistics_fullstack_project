
async function testResult() {
  let result = await getSQLQueryResult();
  console.log("here's the result, ", result);
}

testResult();