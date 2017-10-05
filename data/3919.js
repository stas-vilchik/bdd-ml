{
  const res = operation.responses[code];
  res.code = code;
  return getRefModels(res, swaggerInfo);
}
