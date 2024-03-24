function createTextNode(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "string" ? createTextNode(child) : child;
      }),
    },
  };
}

function render(el, container) {
  console.log(el);
  const dom =
    el.type !== "TEXT_ELEMENT"
      ? document.createElement(el.type)
      : document.createTextNode('');

  // 将props的属性，完全赋值给dom
  Object.keys(el.props)?.map((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });

  const children = el.props.children;
  children?.map((child) => {
    render(child, dom);
  });

  container.append(dom);
}

const React = {
	render,
	createElement
}

export default React