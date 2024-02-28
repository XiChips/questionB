<template>
  <a-layout>
    <a-layout>
      <a-layout-sider width="250">
        <a-menu theme="dark" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <div class="logo">
            <img src="../assets/images/logo.png" alt="">
          </div>
          <!-- <hr /> -->

          <div v-for="(item, i) in links" style="display: flex;justify-content: space-between;">
            <a-menu-item v-if="item.children == undefined" :key="`item${i}_0`" @click="changeTab(item.name)">
              <LaptopOutlined v-if="item.name == '功能功能功能A'" />
              <AuditOutlined v-if="item.name == '功能B'" />
              <HomeOutlined v-if="item.name == '功能C'" />
              {{ item.name }}
              <span style="position: absolute;right: 20px;">{{ ">" }}</span>
            </a-menu-item>

          </div>
        </a-menu>
      </a-layout-sider>
       <div class="" style="padding-right: 3%;">
            <div class="title">
              <div><img src="../assets/images/icon1.png" alt=""><span>首页</span></div>
              <div><img src="../assets/images/icon2.png" alt=""><span>主数据</span></div>
              <div><img src="../assets/images/icon3.png" alt=""><span>辖区管理</span></div>
              <div><img src="../assets/images/icon4.png" alt=""><img src="../assets/images/text.png" style="width: auto;margin-left: -5px;" alt=""></div>
            </div>
          </div>
      <a-layout style="padding: 0px 0px 24px" theme="dark">
        <a-layout-content :style="{ background: 'rgb(245,245,245)', padding: '0px', margin: 0, minHeight: '280px', }">

          <a-breadcrumb :style="{ margin: '16px 0' }">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <!-- <router-view v-else></router-view> -->
        </a-layout-content>
      </a-layout>

    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  HomeOutlined,
  TeamOutlined,
  DesktopOutlined,
  BarChartOutlined,
  ContactsOutlined,
  AuditOutlined,
  ScheduleOutlined,
  ToolOutlined,
  FundProjectionScreenOutlined,
  UserSwitchOutlined,
  TransactionOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";







export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    HomeOutlined,
    TeamOutlined,
    DesktopOutlined,
    BarChartOutlined,
    ContactsOutlined,
    AuditOutlined,
    ScheduleOutlined,
    ToolOutlined,
    FundProjectionScreenOutlined,
    UserSwitchOutlined,
    TransactionOutlined,
  },
  name: "home",
  data() {
    return {
      activeKey: 0,
      links: [
        {
          name: "功能功能功能A",
        },
        {
          name: "功能B",
        },
        {
          name: "功能C",
        },
      ],
      pages: [{ name: "首页", link: "/" }],
      routes: [],
    };
  },
  setup() {
    return {
      selectedKeys: ref(["item0_0"]),
      collapsed: ref(false),
      openKeys: ref(["title1"]),
      basePath: "/index",
    };
  },
  methods: {
    changeTab() {

    }
  },
  created() { },
  beforeMounte() { },
  mounted() {

  },
  watch: {
    $route(to, from) {
      // console.log(from.path);//从哪来
      // console.log(to.path);//到哪去
    },
  },
});
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.ant-layout {
  height: 100vh;
}
.ant-breadcrumb {
  margin: 16px 0 !important;
}
</style>