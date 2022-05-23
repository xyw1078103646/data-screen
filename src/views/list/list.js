/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xiaoyiwen yyxiao@gongsibao.com
 * @LastEditTime: 2022-05-23 00:00:10
 * @Description:
 */

import Panel from "./components/panel.vue";
import TablePanel from "./components/tablePanel.vue";
import { getEquipment } from "@/api/listApi.js";

export default {
    name: "list",
    components: {
        Panel,
        TablePanel,
    },
    data() {
        return {
            loading: false,
            tabList: [{
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
            active: 2,
            pageNum: 1,
            pageSize: 10,
            tableData: [],
            total: 0,
            diff: 0,
            offset: 0
        };
    },
    computed: {
        title() {
            return this.tabList.find((n) => n.code == this.active).label;
        },
        offsetVal() {
            return `-${(this.offset / 192).toFixed(2)}rem`
        }
    },
    mounted() {
        this.init()
        this.getList();
        this.active = this.$route.query.kind || 2
    },
    watch: {
        offset(val) {
            if (val > this.diff) {
                this.offset = this.diff
            }
            if (val < 0) {
                this.offset = 0
            }
        }
    },
    methods: {
        init() {
            const children = this.$refs.tagContent.childNodes
            const pWidth = this.$refs.tagContent.clientWidth
            let cWidth = 0
            children.forEach(n => {
                cWidth += (n.clientWidth + 14)
            });
            cWidth = cWidth - 14
            this.diff = cWidth - pWidth
                // console.log(777, this.diff)
        },
        goLeft() {
            this.offset -= 110
        },
        goRight() {
            this.offset += 110
        },
        handleChange(pageNum) {
            this.pageNum = pageNum;
            this.getList();
        },
        async getList() {
            this.loading = true;
            const res = await getEquipment({
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                kind: this.active,
            });
            this.loading = false;
            this.tableData = res.data.list;
            this.total = res.data.total;
        },
        //判断该行是否展示
        isShow(prop) {
            let enumObj = {
                2: ["name", "installationAddr", "networkAddr", "runStatus"], //智能烟感
                10: ["name", "installationAddr", "networkAddr", "runStatus"], //智能温感
                3: [
                    "name",
                    "installationAddr",
                    "networkAddr",
                    "runStatus",
                    "action1",
                    "action2",
                    "action3",
                ], //智慧用电
                5: [
                    "fireRoomName",
                    "name",
                    "installationAddr",
                    "networkAddr",
                    "runStatus",
                    "action4",
                ], //监控摄像头
                99: ["name", "installationAddr", "networkAddr"], //水浸设备
                14: ["name", "installationAddr", "networkAddr", "runStatus"], //可燃气体探测器
                4: [
                    "name",
                    "installationAddr",
                    "networkAddr",
                    "runStatus",
                    "valueMap",
                    "blockShot",
                    "valveStatus",
                ], //室外消火栓
                9: [
                    "name",
                    "installationAddr",
                    "networkAddr",
                    "runStatus",
                    "valueMap",
                    "valueMap1",
                ], //室内消火栓
                11: [
                    "name",
                    "installationAddr1",
                    "networkAddr",
                    "runStatus",
                    "action5",
                ], //智能充电桩
                6: ["name", "fireRoomName", "networkAddr1", "runStatus"], //用户传输装置
                8: [
                    "name",
                    "installationAddr",
                    "networkAddr",
                    "cameraName",
                    "thermalImageName",
                    "runStatus",
                    "action6",
                ], //火焰识别摄像头
                1: [
                    "fireRoomName",
                    "transmissionName",
                    "name1",
                    "networkAddr",
                    "runStatus",
                ], //消防主机
                12: ["name1", "networkAddr2", "runStatus"], //物联网主机
            };
            if (enumObj[this.active] && enumObj[this.active].includes(prop)) {
                return true;
            } else {
                return false;
            }
        },
        changeActive(code) {
            this.active = code;
            this.getList();
        },
    },
};