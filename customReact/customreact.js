function customRender(reactElement, container) {
  /*
  // create the element
  const domElement = document.createElement(reactElement.type);

  // Add the containt
  domElement.innerHTML = reactElement.children;

  // Set the Attributes
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);

  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop == 'children') {
      continue;
    }

    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    traget: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
