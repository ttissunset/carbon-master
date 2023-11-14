<template>
  <div class="dialog" v-if="visible">
    <div class="dialog-overlay"></div>
    <div class="dialog-container" v-if="type==='message'">
      <div class="dialog-container-top">
        <h3>{{ localTitle }}</h3>
        <p>{{ localMessage }}</p>
      </div>
      <div class="dialog-container-bottom">
        <div class="dialog-container-bottom-btn btn-ok btn-in-message" @click="ensure">确认</div>
      </div>
    </div>

    <div class="dialog-container" v-else-if="type==='confirm'">
      <div class="dialog-container-top">
        <h3>确认步骤</h3>
        <p>{{ localMessage }}</p>
      </div>
      <div class="dialog-container-bottom">
        <div class="dialog-container-bottom-btn" @click="cancel">取消</div>
        <div class="dialog-container-bottom-btn btn-ok" @click="ensure">确认</div>
      </div>
    </div>

    <div class="dialog-container" v-else-if="type==='error'">
      <div class="dialog-container-top">
        <h3>开发出错啦</h3>
        <p>开发出错啦!!!<br>快去检查弹窗哪里配置不对吧</p>
      </div>
      <div class="dialog-container-bottom">
        <div class="dialog-container-bottom-btn btn-error btn-in-message" @click="ensureError">开发出错啦!</div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PopComponent',
  data() {
    return {
      visible: false,
      typeOptions: {
        message: "message",
        confirm: "confirm"
      },
      type: 'error',
      localTitle: this.title,
      localMessage: this.message
    }
  },
  methods: {

    confirmPopShow(message = "", title = "请确认步骤") {
      this.open()
      this.visible = true
      this.type = this.typeOptions.confirm
      console.log(this.type)
      this.localTitle = title
      this.localMessage = message
      return new Promise((resolve) => {
        console.log("promise")
        // this.visible = false
        this.$once('ensure', () => {
          this.visible = false
          resolve({action: 'ensure'})
        })
        this.$once('cancel', () => {
          this.visible = false
          resolve({action: 'cancel'})
        })
      })
    },

    messagePopShow(message = "", title = "消息提示") {
      this.open()
      this.type = this.typeOptions.message
      this.localTitle = title
      this.localMessage = message
    },

    open() {
      this.visible = true
      console.log(this.visible)
    },
    /**
     * @event cancel
     * @type {Function}
     * @description 点击取消按钮
     */
    cancel() {
      return new Promise((resolve => {
        this.visible = false

        this.$emit('cancel')
        resolve({action: 'cancel'})
      }))
    },
    /**
     * @event ensure
     * @type {Function}
     * @description 点击确认按钮
     */
    ensure() {
      return new Promise(resolve => {
        this.visible = false

        this.$emit('ensure')
        resolve({action: 'ensure'})
      })
    },
    /**
     * @event ensureError
     * @type {Function}
     * @description 错误配置时的确认按钮
     */
    ensureError() {
      this.visible = false
    },
    setType(type) {
      const typeArr = Object.keys(this.typeOptions).map(key => this.typeOptions[key]);
      for (let i = 0; i < typeArr.length; i++) {
        if (type === typeArr[i]) {
          this.type = type
          break;
        }
      }
    },
    setTitle(title) {
      this.localTitle = title
    },
    setMessage(message) {
      this.localMessage = message
    }
  },
  props: {
    title: {
      type: String,
    },
    message: {
      type: String,
    }
  }
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-container {
  background: linear-gradient(185deg, var(--youth-blue-2), var(--white) 60%);
  border-radius: var(--radius-8);
  box-shadow: var(--shadow-3);
  padding: 16px;
  z-index: 666;
  width: 400px;
  height: 250px;
}

.dialog-container-top {
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.dialog-container-top h3 {
  font-size: var(--fs-3);
  margin-top: 2%;
}

.dialog-container-top p {
  font-size: var(--fs-7);
  margin-top: 5%;
  max-width: 92%;
}

.dialog-container-bottom {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
}

.dialog-container-bottom-btn {
  width: 42%;
  height: 45px;
  border: #c9c9c9 solid 1px;
  border-radius: var(--radius-6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-family: var(--ff-almm);
  font-weight: var(--fw-600);
  letter-spacing: 2px;
}

.dialog-container-bottom-btn.btn-ok {
  border: var(--youth-blue-purple) solid 1px;
  background-color: var(--youth-blue-purple);
  color: var(--white);
}

.dialog-container-bottom-btn.btn-error {
  border: var(--dark-pink) solid 1px;
  background-color: var(--dark-pink);
  color: var(--white);
}


.dialog-container-bottom-btn:is(:hover,:focus-visible) {
  transform: translateY(-2px);
  transition: var(--transition-1);
  box-shadow: var(--shadow-2);
}

.btn-in-message {
  width: 60%;
}

</style>
