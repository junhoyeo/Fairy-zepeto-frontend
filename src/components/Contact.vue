<template>
    <div class="contact">
        <div class="top-bar">
            <img class="icon" src="../assets/img/search.png" />
            <input type="text" class="search" placeholder="Search"/>
        </div>
        <div class="friend-list">
            <router-link to="/chat">
                <div class="friend">
                    <img class="profile-img" src="../assets/img/friend.png" />
                    <div class="text-area">
                        <span class="name">bosun<img src="../assets/img/united-states.png"></span>
                        <span class="message">새로운 친구</span>
                    </div>
                </div>
            </router-link>

            <!-- <router-link to="/chat">
                <div class="friend">
                    <img class="profile-img" src="../assets/img/friend.png" />
                    <div class="text-area">
                        <span class="name">Emma<img src="../assets/img/united-states.png"></span>
                        <span class="message">New Massage</span>
                    </div>
                </div>
            </router-link>
            <router-link to="/chat">
                <div class="friend">
                    <img class="profile-img" src="../assets/img/friend.png" />
                    <div class="text-area">
                        <span class="name">Emma<img src="../assets/img/united-states.png"></span>
                        <span class="message">New Massage</span>
                    </div>
                </div>
            </router-link>
            <router-link to="/chat">
                <div class="friend">
                    <img class="profile-img" src="../assets/img/friend.png" />
                    <div class="text-area">
                        <span class="name">Emma<img src="../assets/img/united-states.png"></span>
                        <span class="message">New Massage</span>
                    </div>
                </div>
            </router-link>
            <router-link to="/chat">
                <div class="friend">
                    <img class="profile-img" src="../assets/img/friend.png" />
                    <div class="text-area">
                        <span class="name">Emma<img src="../assets/img/united-states.png"></span>
                        <span class="message">New Massage</span>
                    </div>
                </div>
            </router-link>
            <router-link to="/chat">
                <div class="friend">
                    <img class="profile-img" src="../assets/img/friend.png" />
                    <div class="text-area">
                        <span class="name">Emma<img src="../assets/img/united-states.png"></span>
                        <span class="message">New Massage</span>
                    </div>
                </div>
            </router-link>
            <router-link to="/chat">
                <div class="friend">
                    <img class="profile-img" src="../assets/img/friend.png" />
                    <div class="text-area">
                        <span class="name">Emma<img src="../assets/img/united-states.png"></span>
                        <span class="message">New Massage</span>
                    </div>
                </div>
            </router-link>
            <router-link to="/chat">
                <div class="friend">
                    <img class="profile-img" src="../assets/img/friend.png" />
                    <div class="text-area">
                        <span class="name">Emma<img src="../assets/img/united-states.png"></span>
                        <span class="message">New Massage</span>
                    </div>
                </div>
            </router-link> -->


        </div>
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
  name: 'contact',
  data() {
    return {

    };
  },
  methods: {

  },
  created() {

  },
};
</script>

<style scoped>

</style>
