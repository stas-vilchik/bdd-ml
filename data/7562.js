{
  var onLoadSpy = jasmine.createSpy();
  var iframe = React.createElement("iframe", {
    onLoad: onLoadSpy
  });
  iframe = ReactTestUtils.renderIntoDocument(iframe);
  var loadEvent = document.createEvent("Event");
  loadEvent.initEvent("load", false, false);
  ReactDOM.findDOMNode(iframe).dispatchEvent(loadEvent);
  expect(onLoadSpy).toHaveBeenCalled();
}
