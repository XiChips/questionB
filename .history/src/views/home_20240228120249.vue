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
      <a-layout style="padding: 0px 0px 24px" theme="dark">
        <a-layout-content :style="{ background: 'rgb(245,245,245)', padding: '0px', margin: 0, minHeight: '280px', }">

          <div class="title">
            <div><img src="../assets/images/icon1.png" alt=""><span>首页</span></div>
            <div><img src="../assets/images/icon2.png" alt=""><span>主数据</span></div>
            <div><img src="../assets/images/icon3.png" alt=""><span>辖区管理</span></div>
            <div><img src="../assets/images/icon4.png" alt=""><img src="../assets/images/text.png" style="width: auto;margin-left: -5px;" alt=""></div>
          </div>
          <div style="padding: 10px 20px;background-color: rgb(255,255,255);border-bottom: 1px solid #ccc;">
            <a-breadcrumb :style="{ margin: '36px 20px' }">
              <a-breadcrumb-item>首页</a-breadcrumb-item>
              <a-breadcrumb-item>年度协议管理</a-breadcrumb-item>
              <a-breadcrumb-item>二级商协议</a-breadcrumb-item>
              <a-breadcrumb-item>新增二级商协议</a-breadcrumb-item>
            </a-breadcrumb>
            <h3 style="text-align: left;">
              新增二级商协议
            </h3>
          </div>
          <div class="content">
            <div class="title2">
              <hr>
              <div>
                <span>1</span>
                <p>协议主体</p>
              </div>
              <hr>
            </div>
            <div class="area">
              <a-form :model="formState" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
                <div class="line2">
                  <a-button v-if="visible">选择客户</a-button>
                  <a-form-item  v-if="!visible" label="协议客户" :rules="[{ required: true}]">
                    <a-select v-model:value="inputs.value1" show-search placeholder="" style="width: 200px" :options="options" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                  </a-form-item>
                  <a-form-item label="协议状态">
                    <a-select v-model:value="inputs.value2" placeholder="" style="width: 200px" :options="options2" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                  </a-form-item>
                </div>
                <div class="line2">
                  <a-form-item label="够进指标" :rules="[{ required: true}]">
                    <a-select v-model:value="inputs.value3" show-search placeholder="" style="width: 200px" :options="options" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                  </a-form-item>
                  <a-form-item label="纯消指标">
                    <a-select v-model:value="value" placeholder="" style="width: 200px" :options="options2" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                  </a-form-item>
                </div>
                <div class="line2">
                  <a-form-item label="销售区域" :rules="[{ required: true}]">
                    <a-select v-model:value="value" show-search placeholder="" style="width: 200px" :options="options" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                  </a-form-item>
                  <a-form-item label="签订时间">
                    <a-select v-model:value="value" placeholder="" style="width: 200px" :options="options2" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                  </a-form-item>
                </div>
              </a-form>

            </div>
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
      formState: {
        username: "",
        password: "",
      },
      visible: true,
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
      options: [{ value: "上海正也医药有限公司", id: "上海正也医药有限公司" }],
      options2: [{ value: "正常", id: "正常" }, { value: "异常", id: "异常" }],
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