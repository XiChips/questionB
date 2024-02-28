<template>
  <a-layout>
    <a-layout>
      <a-layout-sider width="200">
        <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <div class="logo">
            
          </div>
          <hr />

          <div v-for="(item, i) in links">
            <a-menu-item v-if="item.children == undefined" :key="`item${i}_0`" @click="changeTab(item.name)">
              <AuditOutlined v-if="item.name == '合同管理'" />
              <LaptopOutlined v-if="item.name == '首页'" />
              <HomeOutlined v-if="item.name == '房源管理'" />
              {{ item.name }}
            </a-menu-item>

            <a-sub-menu :key="`title${i + 1}`" v-if="item.children != undefined && item.au != '无权限'">
              <template #title>
                <span>
                  <!-- <AuditOutlined v-if="item.name=='合同管理'" />
                  <LaptopOutlined v-if="item.name=='首页'" />
                  <HomeOutlined v-if="item.name=='不动产管理'" />
                  <ContactsOutlined v-if="item.name=='租客管理'" />
                  <DesktopOutlined v-if="item.name=='工作台'" />
                  <FileTextOutlined v-if="item.name=='合同管理'" />
                  <ScheduleOutlined v-if="item.name=='预约看房审核'" />
                  <ToolOutlined v-if="item.name=='维修管理'" />
                  <FundProjectionScreenOutlined v-if="item.name=='项目管理'" />-->
                  <ScheduleOutlined v-if="item.name == '租后管理'" />
                  <TeamOutlined v-if="item.name == '企业管理'" />
                  <ContactsOutlined v-if="item.name == '租赁管理'" />
                  <UserSwitchOutlined v-if="item.name == '人才管理'" />
                  <BarChartOutlined v-if="item.name == '统计'" />
                  <TransactionOutlined v-if="item.name == '增值服务'" />
                  {{ item.name }}
                </span>
              </template>
              <a-menu-item v-for="(item2, j) in item.children" :key="`item${i}_${j}`" @click="changeTab(item2.title)">{{ item2.title }}
              </a-menu-item>
            </a-sub-menu>
          </div>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0px 10px 24px">
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px', }">
          <div class="flex_sb" style="padding-right: 3%;">
            <div class="titleStyle3">奉贤乐居后台管理系统</div>
          </div>

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
          name: "首页",
        },
        {
          name: "工作台",
        },
        {
          name: "人才政策",
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