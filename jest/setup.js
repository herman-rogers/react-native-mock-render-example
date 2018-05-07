const { JSDOM } = require('jsdom');

const jsdom = new JSDOM();
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

// Setup adapter to work with enzyme 3.2.0
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// Ignore React Web errors when using React Native
// allow other errors to propagate if they're relevant
const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser)/
const realConsoleError = console.error
console.error = message => {
  if (message.match(suppressedErrors)) {
    return
  }
  realConsoleError(message)
}

require('react-native-mock-render/mock');
