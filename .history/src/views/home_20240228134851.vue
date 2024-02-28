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

                  <a-form-item label="协议客户" :rules="[{ required: true}]">
                    <a-button v-if="visible" @click="selectCustom">选择客户</a-button>
                    <a-select defaultOpen v-if="!visible" v-model:value="inputs.value1c" show-search placeholder="" style="width: 200px" :options="options" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="changeCustom"></a-select>
                    <span style="margin-left: 20px;">{{ inputs.value1 }}</span>
                  </a-form-item>
                  <a-form-item label="协议状态">
                    <a-select v-model:value="inputs.value2" placeholder="" style="width: 200px" :options="options2" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
                      <template #suffixIcon>
                        <down-outlined style="width: 15px;height: 15px;color: rgb(78,139,254);" />
                      </template>
                    </a-select>
                  </a-form-item>
                </div>
                <div class="line2">
                  <a-form-item label="购进指标">
                    <a-select v-model:value="inputs.value3" placeholder="" style="width: 88px" :options="options3" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
                      <template #suffixIcon>
                        <down-outlined style="width: 15px;height: 15px;color: rgb(78,139,254);" />
                      </template>
                    </a-select>
                    <a-input v-model:value="inputs.value3" placeholder="输入金额/数量" style="width: 250px;margin-left: 10px;"></a-input>
                  </a-form-item>
                  <a-form-item label="纯销指标">
                    <a-select v-model:value="inputs.value3" placeholder="" style="width: 88px" :options="options3" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
                      <template #suffixIcon>
                        <down-outlined style="width: 15px;height: 15px;color: rgb(78,139,254);" />
                      </template>
                    </a-select>
                    <a-input v-model:value="inputs.value3" placeholder="输入金额/数量" style="width: 250px;margin-left: 10px;"></a-input>
                  </a-form-item>
                </div>
                <div class="line2">
                  <a-form-item label="销售区域">
                    <a-button v-if="visible2" @click="selectArea">选择区域</a-button>
                    <a-select v-if="!visible2" v-model:value="inputs.value7c" placeholder="" style="width: 88px" :options="options4" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="changeArea">
                      <template #suffixIcon>
                        <down-outlined style="width: 15px;height: 15px;color: rgb(78,139,254);" />
                      </template>
                    </a-select>
                    <a-button type="primary" v-if="inputs.value7.length" v-for="(item,id) in inputs.value7" style="margin-left: 10px;"><span @click="deleteItem(id)">{{ item }}
                        <close-outlined /></span></a-button>
                  </a-form-item>
                  <a-form-item label="签订时间">
                    <a-date-picker placeholder="" show-time v-model:value="value1" style="width:350px" />
                  </a-form-item>
                </div>
              </a-form>
              <div class="line2">
                <a-form-item label="购进渠道">
                  <a-select v-model:value="inputs.value3" placeholder="" style="width: 88px" :options="options5" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
                    <template #suffixIcon>
                      <down-outlined style="width: 15px;height: 15px;color: rgb(78,139,254);" />
                    </template>
                  </a-select>
                  <a-button style="margin-left: 10px;">请选择渠道</a-button>
                </a-form-item>
              </div>

              <div style="padding-left: 3vw;">
                <a-table :dataSource="data" :columns="columns" :pagination="false" />
              </div>

            </div>

            <div class="title2">
              <hr>
              <div>
                <span>2</span>
                <p>产品政策</p>
              </div>
              <hr>
            </div>

            <div style="text-align: left;margin-left: 5%;margin-bottom: 20px;">
              <a-button type="primary">添加产品</a-button>
              <span style="margin-left: 20px;">购进总指标(万元)：<b>￥152.65</b></span>
              <span style="margin-left: 20px;">指标按季度分解(万元):<b>[Q1]￥12.5，[Q2]￥12.5，[Q3] ￥12.5，[Q4]￥12.5</b></span>
              <span style="margin-left: 20px;">纯销总指标(万元):<b>￥152.65</b></span>
            </div>

            <div class="area">
              
            </div>
            <div class="title2">
              <hr>
              <div>
                <span>3</span>
                <p>补充协议</p>
              </div>
              <hr>
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
  DownOutlined,
  CloseOutlined
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
    DownOutlined,
    CloseOutlined
  },
  name: "home",
  data() {
    return {
      activeKey: 0,
      formState: {
        username: "",
        password: "",
      },
      inputs: {
        value1: "",
        value1c: "",
        value2: "",
        value3: "",
        value4: "",
        value7c: "",
        value7: [],
      },
      visible: true,
      visible2: true,
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
      options3: [{ value: "金额", id: "金额" }, { value: "金额", id: "金额" }],
      options4: [{ value: "全国", id: "全国" }, { value: "上海", id: "上海" }],
      options5: [{ value: "指定渠道", id: "指定渠道" }],
      pages: [{ name: "首页", link: "/" }],
      data: [{
        col1: "BJ000090",
        col2: "宁波九州通药业有限公司",
        col3: "浙江省",
      },
      {
        col1: "BJ000192",
        col2: "国药控股精华有限公司",
        col3: "浙江省",
      },
      {
        col1: "BJ000283",
        col2: "老百姓药业有限公司",
        col3: "浙江省",
      }],
      columns: [
        {
          title: '指定渠道编码',
          dataIndex: 'col1',
          key: 'col1',
        },
        {
          title: '指定渠道名称',
          dataIndex: 'col2',
          key: 'col2',
        },
        {
          title: '所在省',
          dataIndex: 'col3',
          key: 'col3',
        }
      ],
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

    },
    selectCustom() {
      this.visible = false
      this.inputs.value1c = ""
    },
    changeCustom() {
      this.visible = true
      this.inputs.value1 = this.inputs.value1c
    },
    selectArea() {
      this.visible2 = false
      this.inputs.value7c = ""
    },
    changeArea() {
      this.inputs.value7.push(this.inputs.value7c)
      this.inputs.value7 = Array.from(new Set(this.inputs.value7))
      this.inputs.value7c = ""
    },
    deleteItem(id) {
      this.inputs.value7.splice(id, 1)
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
.ant-layout {
  height: 100vh;
}
.ant-breadcrumb {
  margin: 16px 0 !important;
}
</style>