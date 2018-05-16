import Welcome from './src/main';

/* istanbul ignore next */
Welcome.install = function(Vue) {
  Vue.component(Welcome.name, Welcome);
};

export default Welcome;
