<template>
    <div class="login">
        <div class="box">
            <img class="logo-img" src="../assets/img/logo_img.png"/>
            <input type="text" class="username" placeholder="USERNAME" v-model="username" />
            <input type="password" class="password" placeholder="PASSWORD" v-model="password" @keyup.enter="submit_login"/>
            <button @click="submit_login" class="submit_btn">LOGIN</button>
            <p>If you are not a member of FAIRY, <router-link to="/register">join us</router-link></p>
        </div>
    </div>
</template>

<script>
import router from '../router';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submit_login() {
      if (this.username == '' || this.password == '') {
        alert('빈칸없이 작성해주세요.');
        return;
      }
      this.$http.post('/auth/', {
        name: this.username,
        password: this.password,
      })
        .then((res) => {
          console.log(res);
          this.$session.set('token', res.data.token);
          this.$session.set('user', res.data.user._id);
          // alert('로그인 완료');
          this.$router.push({ name: 'Main' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {

  },
};
</script>

<style scoped>

</style>
