<template>
    <div class="main">
        <div class="top-bar">
                <img class="setting" src="../assets/img/i_setting.png" />
            <span class="coin-wrap">
                <img class="coin" src="../assets/img/i_coin.png" />
                <span class="price">{{coin}}</span>
            </span>
        </div>
        <img class="zepeto" :src="cover"/>
        <div class="bottom-bar">
            <router-link class="home" to="/">
                <img src="../assets/img/i_home.png" />
            </router-link>
            <router-link to="/discovery">
                <span class="go_discovery">
                    <img class="icon" src="../assets/img/i_videochat.png" />
                </span>
            </router-link>
            <router-link class="contact" to="/contact">
                <img src="../assets/img/i_contact.png" />
            </router-link>
        </div>
    </div>
</template>

<script>
import router from '../router';

export default {
  name: 'main',
//   beforeCreate: function () {
//     if (!this.$session.exists()) {
//       this.$router.push('/login')
//     }
//   },
  data() {
    return {
        token: this.$session.get('token'),
        user_id: this.$session.get('user'),
        user: {},
        coin: 12000,
        cover: require('../assets/img/zepeto.png')
    };
  },
  methods: {
    getUser() {
        this.$http.get(`/user/${this.user_id}`)
            .then((res) => {
                this.user = res.data
                console.log(this.user)
                this.getCover()
            })
    },
    getCover() {
        // this.$http.get(`/render/cover/${this.user.zepeto_id}`)
        //     .then((res) => {
        //         console.log(res)
        //         this.cover = res.data
        //     })
        this.cover = `http://localhost:5000/render/cover/${this.user.zepeto_id}`
    }
  },
  created() {
    this.getUser()
  },
};
</script>

<style scoped>

</style>
