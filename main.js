/** 0.0.1 start */

// const dom = document.createElement('div')
// dom.id = 'app'

// document.getElementById('root').append(dom)

// const textNode = document.createTextNode('app')
// dom.append(textNode)

/** 0.0.1 end */

// -------------------------------------------------------------------------------------------------------------------------- //

/** 0.0.2 start */

// ! react -> vdom -> js objects
// 三要素: type props children

const textEl = {
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: "app",
    children: [],
  },
};

const appEl = {
  type: "div",
  props: {
    id: "app",
    children: [textEl],
  },
};

function createTextNode(textEl) {
  if (!textEl.type === "TEXT_ELEMENT")
    throw new Error(`${textEl} is not text element`);

  const textNode = document.createTextNode(textEl.props.nodeValue);

  return textNode;
}

function createElement(el, props, ...children) {
  const dom = document.createElement(el.type);

  dom.id = el.props.id; // ?? 怎么将props的属性，完全赋值给dom

  el.props.children?.map((item) => {
    if (item.type !== "TEXT_ELEMENT") {
      const ndom = createElement(item);
      dom.append(ndom);
    } else {

      const nText = createTextNode(item);
			console.log(item)
      dom.append(nText);
    }
  });

  return dom;
}

const app = createElement(appEl);

document.getElementById("root").append(app);

/** 0.0.1 end */
