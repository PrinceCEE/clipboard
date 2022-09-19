const { deterministicPartitionKey } = require("./index");

test("It returns '0' when no event is passed", () => {
  const candidate = deterministicPartitionKey();
  expect(candidate).toBe("0");
});

test("It returns candidate when partitionKey is not provided", () => {
  const candidate = deterministicPartitionKey({ a: "", b: "" });
  expect(candidate).toBeDefined();
  expect(candidate).not.toBe("0");
});

test("Returns the candidate as partitionKey when partitionKey is a string", () => {
  const candidate = deterministicPartitionKey({
    partitionKey: "hello world",
    a: "",
    b: "",
  });
  expect(candidate).toBe("hello world");
});

test("Returns the candidate as a string when the partitionKey is not a string", () => {
  const event = {
    partitionKey: { a: "a", b: "b" },
  };
  const candidate = deterministicPartitionKey(event);
  expect(candidate).toBe(JSON.stringify(event.partitionKey));
});
