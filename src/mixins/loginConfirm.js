export default {
  // 此处编写的是 Vue组件实例的配置项 通过一定的语法 可以直接混入到组件内部
  // data methods computed 生命周期函数
  // 注意点：1. 如果此处 和 组件内，提供了同名的data 或 methods 则组件内优先级更高
  //        2.  如果编写了生命周期函数 则minxin中的生命周期函数 和页面的生命周期函数
  //            会用数组管理统一执行
  create () {
    // console.log('果果')
  },

  data () {
    return {
      title: '标题'
    }
  },
  methods: {
    sayHi () {
    //   console.log('你好')
    },
    // 根据登录状态判断是否需要显示登录确认框
    // 如果未登录则需要显示确认框并返回true 反之啥也不干并返回false
    loginConfirm () {
      // 判断token是否存在 不存在则弹出确认框 反之则继续请求操作
      console.log(this.$store.getters.token)
      // 判断token 是否存在
      if (!this.$store.getters.token) {
        // window.localstrong.getter(ff_shopping_info)
        // 弹确认框
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作哦',
          confirmButtonText: '去登陆',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            // 如果希望跳转到登录并且登录后能回跳回来 需要在跳转去携带参数（当前的路径地址）
            // this.$route.fullPath (会包含查询参数)
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => { })
        return true
      }
      return false
    }
  }

}
