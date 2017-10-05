{
  var event;

  if (isDef(on[RANGE_TOKEN])) {
    event = isIE ? "change" : "input";
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }

  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    event = isChrome ? "click" : "change";
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}
