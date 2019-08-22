import { fetchApi } from "../src/api";

test("Fetch no API call returns Object with details:message that this address is the root", async () => {
  const data = await fetchApi({ endPoint: "" });
  const json = await data.json();
  expect(json.details).toMatch(
    "This is the root of the Scryfall API and no data is returned at this path. For more information about the methods and objects this API publishes, please see https://scryfall.com/docs/api"
  );
});
