<template>
    <div class="chat">
        <transition name="fade">
            <div class="cover_dark" v-if="popup">
                <div class="popup_gift">
                    <div class="title-bar">
                        <span class="title">선물하기</span>
                        <img class="close" @click="popup = false" src="../assets/img/close.png" />
                    </div>
                    <div class="gift_list">
                        <div class="item a">
                            <span class="info">
                                <span class="img"></span>
                                학교 정원(배경)
                            </span>
                            <span class="price">
                                <img class="icon" src="../assets/img/i_coin.png" />
                                720
                            </span>
                        </div>
                        <div class="item b">
                            <span class="info">
                                <span class="img"></span>
                                학교 복도(배경)
                            </span>
                            <span class="price">
                                <img class="icon" src="../assets/img/i_coin.png" />
                                540
                            </span>
                        </div>
                        <div class="item c" @click="open">
                            <span class="info">
                                <span class="img"></span>
                                회색 맨투맨(상의)
                            </span>
                            <span class="price">
                                <img class="icon" src="../assets/img/i_coin.png" />
                                420
                            </span>
                        </div>
                        <div class="item d">
                            <span class="info">
                                <span class="img"></span>
                                주황색 맨투맨(상의)
                            </span>
                            <span class="price">
                                <img class="icon" src="../assets/img/i_coin.png" />
                                800
                            </span>
                        </div>
                        <div class="item e">
                            <span class="info">
                                <span class="img"></span>
                                학교 교실(배경)
                            </span>
                            <span class="price">
                                <img class="icon" src="../assets/img/i_coin.png" />
                                800
                            </span>
                        </div>
                        <div class="item f">
                            <span class="info">
                                <span class="img"></span>
                                꽃무늬 트레이닝복(상의)
                            </span>
                            <span class="price">
                                <img class="icon" src="../assets/img/i_coin.png" />
                                1280
                            </span>
                        </div>
                        <div class="item g">
                            <span class="info">
                                <span class="img"></span>
                                하늘색 셔츠(상의)
                            </span>
                            <span class="price">
                                <img class="icon" src="../assets/img/i_coin.png" />
                                230
                            </span>
                        </div>
                        <div class="item h">
                            <span class="info">
                                <span class="img"></span>
                                베이지색 바지(하의)
                            </span>
                            <span class="price">
                                <img class="icon" src="../assets/img/i_coin.png" />
                                390
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div class="navbar">
            <router-link to="/contact">
                <span class="back_btn"><img class="icon" src="../assets/img/back.png" /> back</span>
            </router-link>
            <span class="name">Emma</span>
            <span class="video_chat_btn">
                <img class="icon" src="../assets/img/i_videochat_w.png" />
            </span>
        </div>
        <div class="chat-box">
            <div class="you row">
                <span class="balloon">
                    Hey there! Remember me? We did not think the same, but we had a so much fun~<br>
                    거기있어! 날 기억해? 우리는 똑같은 생각을하지 않았지만 우리에게는 너무 재미 있었어요 ~
                </span>
            </div>
            <div class="me row" v-if="sended">
                <span class="balloon">
                    {{ message }}
                </span>
            </div>
        </div>
        <div class="input-bar">
            <img class="gift_btn" @click="popup=true" src="../assets/img/i_gift.png" />
            <input type="text" class="message_input" v-model="message_input" @keyup.enter="send" />
            <img class="send_btn" src="../assets/img/i_send.png" @click="send"/>
        </div>
    </div>
</template>

<script>
import router from '../router';

export default {
  name: 'chat',
  data() {
    return {
      message_input: '',
      popup: false,
      message: '',
      sended: false
    };
  },
  methods: {
    send () {
        this.message = this.message_input
        this.message_input = ''
        this.sended  = true
    },
    open () {
        this.$swal('선물 완료!')
    }
  },
  created() {

  },
};
</script>

<style scoped>

</style>
