const text = "Hello recruiters";
test("Must contain recruiters", () => {
  expect(text).toMatch(/recruiters/);
});
