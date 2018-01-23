import $store from '@store';
import {EventBus} from '@eventBus';

let buttons = [];
buttons.push({
  title: "Home",
  class:"is-hidden-desktop",
  icon: {
    name: "home",
    pack: "fa"
  },
  to: {name: "Index"},
  tooltip: "Back to home",
})
buttons.push({
  title: "Login",
  class:"is-hidden-desktop",
  handler: () => {
    EventBus.$emit('login');
  },
  icon: {
    name: "sign-in",
    pack: "fa"
  },
  tooltip: "Enter to your account",
  condition: () => $store.getters.isNotLogged()
})
buttons.push({
  title: "register",
  class:"is-hidden-desktop",
  handler: () => {
    EventBus.$emit('register');
  },
  icon: {
    name: "account",
    pack: "mdi"
  },
  tooltip: "Create new account",
  condition: () => $store.getters.isNotLogged()
})
buttons.push({
  title: "Logout",
  class:"is-hidden-desktop",
  handler: () => {
    EventBus.$emit('logout');
  },
  icon: {
    name: "sign-out",
    pack: "fa"
  },
  tooltip: "Exit from your account",
  condition: () => $store.getters.isLogged()
})
buttons.push({
  title: "Discover",
  tooltip: "All our memes is for you",
  children: [
    {
      title: "Top",
      icon: {
        name: "fire",
        pack: "mdi",
      },
      tooltip: "Show the best memes",
    },
    {
      title: "New",
      icon: {
        name: "timelapse",
        pack: "mdi",
      },
      tooltip: "Show new memes",
    },
  ]
})
export default buttons;
