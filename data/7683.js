{
  runs.dispatchCount++;
  expect("").toBe(
    "Event type: " +
      registrationName +
      "\nShould never occur on:" +
      readableID +
      "\nFor event test config:\n" +
      JSON.stringify(eventTestConfig) +
      "\n"
  );
}
