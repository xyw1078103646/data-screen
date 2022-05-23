/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-23 11:54:35
 * @Description:
 */

import Panel from "../list/components/panel.vue";
import TablePanel from "../list/components/tablePanel.vue";
import { getOperation, getDetail, getMsgCount } from "@/api/operationApi.js";

export default {
  name: "list",
  components: {
    Panel,
    TablePanel,
  },
  data() {
    return {
      loading: false,
      detailFlag: false,
      detailData: null,
      drawerFlag: false,
      drawerData: [],
      drawerPage: 1,
      drawerTotal: 0,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        handle: 1, //处理状态 1:未处理 2:已处理
        name: "", //设备名称
        address: "", //安装地址
        kind: undefined, //设备类型
        typeName: undefined, //报警类型
        startTime: undefined,
        endTime: undefined,
        networkAddr: "", //通讯地址
        resourceName: undefined, //处理结果
      },
      deawerPage: 1,
      dateArr: [],
      tabList: [
        {
          code: 2,
          label: "智能烟感",
        },
        {
          code: 10,
          label: "智能温感",
        },
        {
          code: 3,
          label: "智慧用电",
        },
        {
          code: 5,
          label: "监控摄像头",
        },
        {
          code: 99,
          label: "水浸设备",
        },
        {
          code: 14,
          label: "可燃气体探测器",
        },
        {
          code: 4,
          label: "室外消火栓",
        },
        {
          code: 9,
          label: "室内消火栓",
        },
        {
          code: 11,
          label: "智能充电桩",
        },
        {
          code: 6,
          label: "用户传输装置",
        },
        {
          code: 8,
          label: "火焰识别摄像头",
        },
        {
          code: 1,
          label: "消防主机",
        },
        {
          code: 12,
          label: "物联网主机",
        },
      ],
      typeList: [
        {
          label: "火警",
          value: "火警",
        },
        {
          label: "故障",
          value: "故障",
        },
        {
          label: "告警",
          value: "告警",
        },
        {
          label: "屏蔽",
          value: "屏蔽",
        },
        {
          label: "监管",
          value: "监管",
        },
        {
          label: "反馈",
          value: "反馈",
        },
      ],
      resourceList: [
        {
          label: "误报",
          value: "误报",
        },
        {
          label: "发生火灾",
          value: "发生火灾",
        },
        {
          label: "上报隐患",
          value: "上报隐患",
        },
        {
          label: "批量处理",
          value: "批量处理",
        },
      ],
      tableData: [],
      total: 0,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleChange(pageNum) {
      this.queryParams.pageNum = pageNum;
      this.getList();
    },
    search() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    reset() {
      let handle = this.queryParams.handle;
      this.queryParams = {
        pageNum: 1,
        pageSize: 10,
        name: "", //设备名称
        address: "", //安装地址
        kind: undefined, //设备类型
        typeName: undefined, //报警类型
        startTime: undefined,
        endTime: undefined,
        networkAddr: "", //通讯地址
        resourceName: undefined, //处理结果
      };
      this.queryParams.handle = handle;
      this.getList();
    },
    async getList() {
      this.loading = true;
      const res = await getOperation(this.queryParams);
      this.loading = false;
      this.tableData = res.data.list;
      this.total = res.data.total;
    },
    changeDate(v) {
      this.queryParams.startTime = v[0];
      this.queryParams.endTime = v[1];
      this.search();
    },
    changeHandle(val) {
      this.queryParams.handle = val;
      this.reset();
    },
    async goDetail(row) {
      const res = await getDetail({
        handle: this.queryParams.handle,
        state: row.state,
        deviceId: row.deviceId,
        timestamp: row.timestamp,
      });
      this.detailData = res.data;
      this.detailFlag = true;
    },
    closeDialog() {
      this.detailData = null;
      this.detailFlag = false;
    },
    async getDrawer(row) {
      this.drawerFlag = true;
      const res = await getMsgCount({
        state: row.state,
        deviceId: row.deviceId,
        startTime: row.createTime,
        endTime: row.updateTime,
        pageNum: this.deawerPage,
        pageSize: 10,
      });
      this.drawerData = res.data.list || [];
      this.drawerTotal = res.data.total;
    },
    closeDrawer() {
      this.drawerFlag = false;
    },
    handleChangeDrawer(pageNum) {
      this.deawerPage = pageNum;
      this.getDrawer();
    },
  },
};
