import { fetchApi } from "../src/api";

describe("api adapter", () => {
  describe("#fetchApi()", () => {
    beforeEach(() => {});

    test("Fetch no subdomain API call throws an error with code, status, and details", async () => {
      const params = { endPoint: "" };
      await expect(Promise.resolve(fetchApi(params))).rejects.toThrow(
        "400 - bad_request: This is the root of the Scryfall API and no data is returned at this path. For more information about the methods and objects this API publishes, please see https://scryfall.com/docs/api"
      );
    });

    test("Bad or non-JSON response throws SyntaxError", async () => {
      const params = {
        endPoint: "/cards/random"
      };
      await expect(Promise.resolve(fetchApi(params))).rejects.toThrow(
        "400 - bad_request: This is the root of the Scryfall API and no data is returned at this path. For more information about the methods and objects this API publishes, please see https://scryfall.com/docs/api"
      );
    });
  });
});
