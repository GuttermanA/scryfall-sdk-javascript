import { fetchApi } from "../src/api";
import { queryBuilder, isObjectWithKeys } from "../src/utils";
import QueryBuilder from "../src/queryBuilder";

describe("api adapter", () => {
  describe("#fetchApi()", () => {
    test("Fetch no subdomain API call throws an error with code, status, and details", async () => {
      const params = { endPoint: "" };
      await expect(Promise.resolve(fetchApi(params))).rejects.toThrow(
        "400 - bad_request: This is the root of the Scryfall API and no data is returned at this path. For more information about the methods and objects this API publishes, please see https://scryfall.com/docs/api"
      );
    });

    describe("JSON", () => {
      test("Resolves valid when requesting JSON", async () => {
        const params = {
          endPoint: `/cards/random`
        };
        await expect(Promise.resolve(fetchApi(params))).resolves;
      });

      test("Return a valid JSON Object", async () => {
        const params = {
          endPoint: `/cards/random`
        };
        const data = await fetchApi(params);
        expect(isObjectWithKeys(data)).toBeTruthy();
      });
    });

    describe("Text", () => {
      test("Resolves valid when requesting text", async () => {
        const query = new QueryBuilder({ optionParams: { format: "text" } })
          .urlString;
        const params = {
          endPoint: `/cards/random${query}`
        };
        await expect(typeof Promise.resolve(fetchApi(params))).resolves;
      });

      test("Returns a String", async () => {
        const query = new QueryBuilder({ optionParams: { format: "text" } })
          .urlString;
        const params = {
          endPoint: `/cards/random${query}`
        };
        const data = await fetchApi(params);

        expect(typeof data).toBe("string");
      });
    });

    describe("CSV", () => {
      test("Resolves valid when requesting text", async () => {
        const query = new QueryBuilder({ optionParams: { format: "csv" } })
          .urlString;
        const params = {
          endPoint: `/cards/search${query}`
        };
        await expect(typeof Promise.resolve(fetchApi(params))).resolves;
      });
    });
  });
});
