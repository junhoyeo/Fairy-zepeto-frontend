<template>
    <div>
        <div v-if="loading" class="matching-wrap">
            <div class="matching">매칭 중입니다...</div>
        </div>
        <div class="discovery" v-else>
            <div class="top-area">
                <div class="my-face-box">
                    <img :src="cover2" class="cover2">
                </div>
            </div>
            <div class="middle-area">
                <span class="info">
                    <img class="nationality" :src="nationality_image" />
                    <span class="name">{{name}}</span>
                </span>
                <div class="your-face-box">
                    <img :src="cover1" class="cover1">
                </div>
                <div class="translate">
                    <span v-if="chat.text">
                        <strong>{{ name }}</strong>: {{ chat.text }} / {{ chat.translate }}
                    </span>
                </div>
                <input v-model="message" @keyup.enter="send"/>
            </div>
            <div class="bottom-area">
                <p class="question" v-if="num">Q{{num}}. {{question.question}}</p>

                <span class="choice-wrap" @click="answer_question(question.answers[0])">
                    <span class="choice">{{question.answers[0]}}
                        <span class="op-choice" v-if="op_answer === my_answer === 0 && op_answer !== 2">모두의 선택</span>
                        <span class="op-choice" v-else-if="op_answer === 0">상대방의 선택</span>
                        <span class="op-choice" v-else-if="my_answer === 0">내 선택</span>
                    </span>
                </span>
                <span class="choice-wrap" @click="answer_question(question.answers[1])">
                    <span class="choice">{{question.answers[1]}}
                        <span class="op-choice" v-if="op_answer === my_answer === 1 && op_answer !== 2">모두의 선택</span>
                        <span class="op-choice" v-else-if="op_answer === 1">상대방의 선택</span>
                        <span class="op-choice" v-else-if="my_answer === 1">내 선택</span>
                    </span>
                </span>
            </div>
        </div>
        <div class="bottom-bar">
                <router-link class="home" to="/">
                    <img src="../assets/img/i_home.png" />
                </router-link>
                <div @click="match">
                    <span class="go_discovery">
                        <img class="icon" src="../assets/img/i_change.png" />
                    </span>
                </div>
                <router-link class="contact" to="/contact">
                    <img src="../assets/img/i_contact.png" />
                </router-link>
            </div>
    </div>
</template>

<script>
import router from '../router';
import korea from '../assets/img/south-korea.png';
import usa from '../assets/img/united-states.png';

export default {
  name: 'discovery',
  data() {
    return {
        token: this.$session.get('token'),
        user_id: this.$session.get('user'),
        loading: true,
        target: '',
      location: '',
      name: '',
      num: 0,
      question: {
          question: '',
          answers: ['', '']
      },
      op_answer: 2,
      my_answer: 2,
      questions: [],
      cover1: require('../assets/img/zepeto.png'),
      cover2: require('../assets/img/zepeto.png'),
      message: '',
      chat: {}
    };
  },
  computed: {
    nationality_image() {
      if (this.location == 'korean') return korea;
      else return usa;
    },
  },
  methods: {
    match () {
        this.$socket.emit('match', this.token)
        this.loading = true
    },
    getProfile (zepeto_id) {
        return `http://localhost:5000/render/${zepeto_id}`
    },
    getUser() {
        this.$http.get(`/user/${this.user_id}`)
            .then((res) => {
                this.user = res.data
                console.log(this.user)
                this.cover2 = this.getProfile(this.user.zepeto_id)
            })
    },
    send() {
        if (this.message){
            this.$socket.emit('talk', {
                token: this.token,
                target: this.target, 
                message: this.message
            })
            this.message = ''
        }
    },
    load_question () {
        this.$socket.emit('question', {token: this.token})
        this.op_answer = this.my_answer = 2
    },
    answer_question (answer) {
        if (answer) {
            this.my_answer = this.question.answers.indexOf(answer);
            this.$socket.emit('answer', {
                token: this.token,
                answer: answer
            })
        }
    }
  },
  sockets: {
        paired (data) {
            this.loading = false
            this.location = data.location
            this.name = data.name
            this.target = data._id
            this.cover1 = this.getProfile(data.zepeto_id)
            this.getUser()
            this.load_question()
        },
        ended () {
            this.loading = true
            this.num = 0
            this.question = {
                question: '',
                answers: ['', '']
            }
            this.questions = []
            this.op_answer = this.my_answer = 2
        },
        received (data) {
            this.chat = data
        },
        questioned (data) {
            if (!this.questions.includes(data.id)) this.num ++;
            this.question = data
            this.questions.push(data.id)
        },
        opponent_answered (data) {
            this.op_answer = this.question.answers.indexOf(data.answer)
        },
        clear () {
            setTimeout(() => {
                this.load_question()
            }, 2000);
        },
        end_questions () {
            this.$swal.fire({
                title: '대화 종료!',
                text: "친구신청을 하시겠습니까?",
                type: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '신청'
            }).then((result) => {
                if (result.value)
                    this.$swal('신청되었어요!')
                this.match()
            })
        }
  },
  created() {
        this.match()
  },
};
</script>

<style scoped>
.matching-wrap {
    width: 100%;
    height: 100%;
    text-align: center;
}
.matching {
    color:#2C6CFF;
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 20%;
}
.your-face-box, .my-face-box {
    text-align: center;
}
.cover1 {
    width: 200px;
    height: auto;
    margin: auto;
}
.cover2 {
    width: 100px;
    height: auto;
    margin: auto;
    margin-top: 10px;
}
.middle-area {
    text-align: center;
}
input {
    border: 1px solid #bdbdbd;
    border-radius: 12px;
    width: 90%;
    margin: auto;
    font-size: 1.5em;
}
.discovery .middle-area .info .name {
    font-size: 15px;
    margin-left: 10px;
}
.translate {
    background-color: #f3f3f3 !important;
}
.info {
    display: block;
    left: 10px;
}
.nationality, .name {
    vertical-align: middle;
}
.op-choice {
    background-color: #f3f3f3;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    padding: 1px;
}
</style>
