<template>
    <div class="register">
        <div class="box">
            <img class="logo-img" src="../assets/img/logo_img.png" />
            <input type="text" class="username" placeholder="USERNAME" v-model="username" />
            <input type="password" class="password" placeholder="PASSWORD" v-model="password" />
            <input type="password" class="password" placeholder="CONFIRM PASSWORD" v-model="c_password" />
            <input type="text" class="code" placeholder="ZEPETO CODE" v-model="code" />
            <select class="nationality" v-model="nationality">
                <option value="">국적선택</option>
                <option value="korean">Republic of Korea</option>
                <option value="english">United States of America</option>
            </select>
            <button @click="submit_register" class="submit_btn">Register</button>
            <p>Have you been a member of FAIRY? <router-link to="/login">Login</router-link></p>
        </div>
    </div>
</template>

<script>
import router from '../router';

export default {
  name: 'register',
  data() {
    return {
      username: '',
      code: '',
      password: '',
      c_password: '',
      nationality: '',
    };
  },
  methods: {
    submit_register() {
      if (this.username == '' || this.code == '' || this.password == '' || this.c_password == '' || this.nationality == '') {
        alert('빈칸없이 작성해주세요.');
        return;
      }
      if (this.password != this.c_password) {
        alert('Confirm Password를 확인해주세요.');
        this.c_password = '';
        return;
      }
      this.$http.post('/user/register', {
        name: this.username,
        password: this.password,
        zepeto_id: this.code,
        location: this.nationality,
      })
        .then((res) => {
          console.log(res);
          this.$swal('가입 완료!');
          this.$router.push({ name: 'Login' });
        });
    },
  },
  created() {

  },
};
</script>

<style scoped>

</style>
