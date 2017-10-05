{
  const folder = lang.tag;
  globEach("build/jest/docs/" + folder + "/**", rmFile);
  globEach("build/jest/docs/" + folder + "/**", rmDir);
  globEach("build/jest/" + folder + "/**", rmFile);
  globEach("build/jest/" + folder + "/**", rmDir);
  globEach("src/jest/docs/" + folder + "/**", rmFile);
  globEach("src/jest/docs/" + folder + "/**", rmDir);
  globEach("src/jest/" + folder + "/**", rmFile);
  globEach("src/jest/" + folder + "/**", rmDir);
}
