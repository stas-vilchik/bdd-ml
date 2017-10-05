{
  var npm = grunt.file.readJSON("package.json");
  var bower = grunt.file.readJSON("bower.json");
  var fields = this.data.fields || [];

  for (var i = 0, l = fields.length; i < l; i++) {
    var field = fields[i];
    bower[field] = npm[field];
  }

  grunt.file.write("bower.json", JSON.stringify(bower, null, 2));
}
