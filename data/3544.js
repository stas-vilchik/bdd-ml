{
  return {
    code: code || -1,
    success: false,
    message: message || codeMap[code || "-1"] || codeMap["-1"],
    data: data || null
  };
}
