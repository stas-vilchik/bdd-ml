{
  compare(
    "warning(condition, 'a %s b', 'c');",
    "__DEV__ ? warning(condition, 'a %s b', 'c') : void 0;"
  );
}
