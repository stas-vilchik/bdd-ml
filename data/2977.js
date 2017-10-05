{
  let classification, isAllowed;
  const inWhitelist = result.id in whitelist;
  delete whitelist[result.id];

  if (!result.expectedError) {
    if (!result.actualError) {
      classification = "success";
      isAllowed = !inWhitelist;
    } else {
      classification = "falseNegative";
      isAllowed = inWhitelist;
    }
  } else {
    if (!result.actualError) {
      classification = "falsePositive";
      isAllowed = inWhitelist;
    } else {
      classification = "failure";
      isAllowed = !inWhitelist;
    }
  }

  summary.passed &= isAllowed;
  summary[isAllowed ? "allowed" : "disallowed"][classification].push(result);
}
