{
  beforeEach(pushMessage("beforeEach1"));
  afterEach(pushMessage("afterEach1"));
  beforeEach(pushMessage("beforeEach2"));
  afterEach(pushMessage("afterEach2"));
  it("does it 1", pushMessage("outer it 1"));
}
