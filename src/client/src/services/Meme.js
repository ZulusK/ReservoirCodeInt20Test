import API from '#/API';

export default {
  random2 () {
    return API.access().get('/api/v1/meme/random2');
  },
  vote(data){
    return API.access().get(`/api/v1/meme/vote/${data.id}`);
  }
}
