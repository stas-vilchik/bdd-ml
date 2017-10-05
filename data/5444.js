{
  console.log("Cleaning up i18n/*.js, build/, and src/ files...");
  globEach("i18n/*.js", rmFile);
  languages.filter(lang => lang.tag != "en").map(lang => {
    const folder = lang.tag;
    globEach("build/jest/docs/" + folder + "/**", rmFile);
    globEach("build/jest/docs/" + folder + "/**", rmDir);
    globEach("build/jest/" + folder + "/**", rmFile);
    globEach("build/jest/" + folder + "/**", rmDir);
    globEach("src/jest/docs/" + folder + "/**", rmFile);
    globEach("src/jest/docs/" + folder + "/**", rmDir);
    globEach("src/jest/" + folder + "/**", rmFile);
    globEach("src/jest/" + folder + "/**", rmDir);
  });
  translation();
}
