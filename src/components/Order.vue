<template>
  <div class="commonm_header" >
    <!-- 侧栏-->
    <mu-appbar class="appbar" style="width: 100%;" color="primary">
  <mu-button icon slot="left"
  @click="open=!open">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
  Title

  <mu-button flat slot="right"
  v-if="this.$store.state.username"
  @click="logout()">退出
  </mu-button>
  <mu-button flat slot="right"
  v-if="!this.$store.state.username"
  v-on:click="toLogin()">登陆
  </mu-button>
</mu-appbar>
    <!-- 侧栏在这里-->
    <mu-drawer
      :open.sync="open"
      :docked="docked"
      :right="position === 'right'"
    >
      <mu-list>
        <router-link
          to="login"
          v-if="!this.$store.state.username"
        >
          <mu-list-item
            button
            @click="open=!open"
          >
            <mu-list-item-action title="登录">
              <mu-icon value="person_outline"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>登录</mu-list-item-title>
          </mu-list-item>
        </router-link>

        <router-link
          to="user"
          v-if="this.$store.state.username"
        >
          <mu-list-item
            button
            @click="open=!open"
          >
            <mu-list-item-action title="个人中心">
              <mu-avatar>
                <img src="../assets/baoxue.png">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>{{this.$store.state.username}}</mu-list-item-title>

          </mu-list-item>
        </router-link>
        <mu-divider />
        <router-link to="thingslist">
          <mu-list-item
            button
            @click="open=!open"
          >
            <mu-list-item-action title="事情清单">
              <mu-icon value="event"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>事情清单</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link to="album">
          <mu-list-item
            button
            @click="open=!open"
          >
            <mu-list-item-action value="回忆相册">
              <mu-icon value="photo"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>回忆相册</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link to="about">
          <mu-list-item
            button
            @click="open=!open"
          >
            <mu-list-item-action title="关于">
              <mu-icon value="priority_high"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>关于</mu-list-item-title>
          </mu-list-item>
        </router-link>

        <mu-list-item
          @click="open = false"
          button
        >
          <mu-list-item-action value="关闭">
            <mu-icon value="clear"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>关闭</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>

</template>

<script>
export default {
  data() {
    return {
      docked: false,
      open: false,
      position: "left",
    };
  },
  methods:{
    logout(){
      this.open=
      this.$store.commit("LOGOUT")
      this.$router.push('/')
      alert("已退出")
    },
    toLogin(){
      this.$router.push("/login")
    }
  }
};
</script>

<style>
@import "//fonts.useso.com/css?family=Roboto:300，400，500，700，400italic";
@import "https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
.appbar {
  width: 100%;
  position: fixed;
  top: 0;
}
</style>

