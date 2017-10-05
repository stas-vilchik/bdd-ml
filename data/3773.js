support.r("post", "/project/delete", user.token, {
  id: data.data[0]._id
});
