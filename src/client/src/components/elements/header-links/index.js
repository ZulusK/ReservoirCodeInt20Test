import $store from '@store';
import {EventBus} from '@eventBus';

let buttons = [];
buttons.push({
  title: "Home",
  icon: {
    name: "home",
    pack: "fa"
  },
  to: {name: "Index"},
  tooltip: "Back to home",
})
buttons.push({
  title: "Login",
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
  title: "Logout",
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
