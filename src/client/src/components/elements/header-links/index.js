import $store from '@store';

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
  icon: {
    name: "sign-in",
    pack: "fa"
  },
  tooltip: "Enter to your account",
  condition: () => $store.getters.isNotLogged()
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
