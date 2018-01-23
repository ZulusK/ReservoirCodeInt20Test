import $store from '@store';

export default {
  logout () {
    console.log('logout')
    $store.dispatch('setToken_access', null);
    $store.dispatch('setToken_refresh', null);
    $store.dispatch('setUser', null);
  }
}
