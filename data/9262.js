{
  if (/\d-keep-alive$/.test(e.tag))
    return t("keep-alive", {
      props: e.componentOptions.propsData
    });
}
