const text = "Hello wolox";
test("Must contain wolox", () => {
  expect(text).toMatch(/wolox/);
});
