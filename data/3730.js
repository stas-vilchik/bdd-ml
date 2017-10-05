{
  create({
    name: "demo",
    url: "/demo",
    members: [user2._id]
  }).then(data => {
    data.success.should.be.ok();
    done();
  });
}
