<template>
  <div style="margin-top:66px">
    <mu-container style="text-align:center">
      <mu-text-field
        style="margin-top:100px;"
        v-model="loginInfo.username"
        label="UserName"
        label-float
        help-text="用户名为6-12长度的字符"
        icon="account_circle"
      ></mu-text-field><br />
      <mu-text-field
        v-model="loginInfo.password"
        label="Password"
        label-float
        help-text="请输入密码"
        icon="locked"
      ></mu-text-field><br />
      <mu-container>
        <mu-button color="primary"
        v-on:click="register()">提交</mu-button>
      </mu-container>

    </mu-container>
  </div>
</template>

<script>
import store from '../store/store.js'
export default {
  data() {
    return {
      loginInfo: { username: "", password: "" },
      responseResult: []
    };
  },
  methods: {
    register(){ //方法
      // console.log(this.loginInfo);
      let name = this.loginInfo.username;
      alert(name);
      let pass = this.loginInfo.password;
      if(""!=name&&""!=pass){
        this.$axios.post("user/register",{
          id: "",
          username: name,
          password: pass,
        }).then((response) => {
            console.log(response)
            if(response.data==1){
            //   this.$store.commit('ADD_ACCOUNT',response.data.msg)
            //   this.$store.commit('GET_USER',name)
            alert("欢迎登陆");
            //   alert("欢迎登陆，"+name)
              this.$router.push("/user")
            }else{
              //登陆失败
              alert("注册失败")
              alert(response)
            }
        })
      }
      else{
        alert("用户名或密码不能为空");
      }
    }
  }
};
</script>

<style>
</style>
