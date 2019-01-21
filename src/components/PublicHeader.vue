<template>
  <div class="hearder">
    <mu-appbar
      
      color="primary"
    >
      <mu-button
        icon
        slot="left"
        @click="open = !open"
      >
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      title

      <mu-button
        flat
        slot="right"
      >
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </mu-appbar>

    <mu-drawer
      :open.sync="open"
      :docked="docked"
      :right="position === 'right'"
    >
      <mu-list>
        <router-link
          :to="{'name':'Login'}"
          v-if="!userinfo"
        >
          <mu-list-item
            button
            :ripple="false"
          >
            <mu-list-item-action title="登陆">
              <mu-icon value="person_outline"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>登陆</mu-list-item-title>
          </mu-list-item>
        </router-link>
        
        <router-link
          :to="{'name':'person'}"
          v-if="userinfo"
        >
          <mu-list-item
            button
            :ripple="false"
          >
            <mu-list-item-action title="个人中心">
              <mu-avatar>
                <img v-bind:src="userinfo.PicUrl">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>{{userinfo.UsereName}}</mu-list-item-title>

          </mu-list-item>
        </router-link>
        <mu-divider />
        <router-link :to="{'name':'index'}">
          <mu-list-item
            button
            :ripple="false"
          >
            <mu-list-item-action title="阅读历史">
              <mu-icon value="import_contacts"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>阅读历史</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link :to="{'name':'login'}">
          <mu-list-item
            button
            :ripple="false"
          >
            <mu-list-item-action title="我的书架">
              <mu-icon value="local_library"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>我的书架</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link :to="{'name':'login'}">
          <mu-list-item
            button
            :ripple="false"
          >
            <mu-list-item-action title="分类">
              <mu-icon value="view_comfy"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>查看分类</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link :to="{'name':'login'}">
          <mu-list-item
            button
            :ripple="false"
          >
            <mu-list-item-action title="关于">
              <mu-icon value="priority_high"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>关于</mu-list-item-title>
          </mu-list-item>
        </router-link>
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
      userinfo:{
        UserName:"liu"
      }
      
    };
  },
  mounted() {
    if (this.isEmptyProperty(localStorage.userInfo)) {
      this.userinfo = JSON.parse(localStorage.userInfo);
    }
  }
};
</script>

<style>
@import "//fonts.useso.com/css?family=Roboto:300，400，500，700，400italic";
@import "https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
.mu-icon-button {
  font-size: 14px !important;
}

</style>

