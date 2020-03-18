import { searchPlayer } from "./search";

describe("search Integration Tests", () => {
  it("should return player", done => {
    searchPlayer("Ronaldo").then(player => {
      expect(player).not.toBe(undefined);
      expect(player?.name).toContain("Ronaldo");
      done();
    });
  });
});
