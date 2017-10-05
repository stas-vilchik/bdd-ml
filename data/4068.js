{
  const STACK_REGEXP = /^.*at.*(setup-jest-globals|extractExpectedAssertionsErrors).*\n/gm;

  if (!STACK_REGEXP.test(stderr)) {
    throw new Error(`
      This function is used to remove inconsistent stack traces between
      jest-jasmine2 and jest-circus. If you see this error, that means the
      stack traces are no longer inconsistent and this function can be
      safely removed.

      output:
      ${stderr}
    `);
  }

  return stderr.replace(STACK_REGEXP, "").replace(/\s+$/gm, "");
}
