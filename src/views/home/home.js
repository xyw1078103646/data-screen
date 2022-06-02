/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xyw1078103646 1078103646@qq.com
 * @LastEditTime: 2022-06-02 17:55:08
 * @Description:
 */
import { getDsData } from "@/api/homeApi";
import Panel from "./components/panel.vue";
import Access from "./components/access.vue";
import Alarm from "./components/alarm.vue";
import Info from "./components/info.vue";
import Manager from "./components/manager.vue";
import Position from "./components/position.vue";
import Records from "./components/records.vue";
import RunStatus from "./components/runStatus.vue";
import axios from 'axios'

export default {
    name: "home",
    components: {
        Panel,
        Access,
        Alarm,
        Info,
        Manager,
        Position,
        Records,
        RunStatus,
    },
    data() {
        return {
            access: null, //物联接入
            alarm: null, //运营统计
            manager: null, //人员管理
            position: null, //重点部位（巡逻点）巡查管理
            runStatus: null, //本月运维状态
            records: null,
            loading: false,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            this.loading = true;
            const res = await getDsData({});
            this.access = res.data.access;
            this.alarm = res.data.alarm;
            this.manager = res.data.manager;
            this.position = res.data.position;
            this.runStatus = res.data.runStatus;
            this.records = res.data.alarm.records.map((n) => {
                n.showTime = n.createTime.split(" ")[1];
                return n;
            });
            this.loading = false;
            // axios.post('/v1/device/analyse').then(res => {
            //     this.access = res.data.access;
            //     this.alarm = res.data.alarm;
            //     this.manager = res.data.manager;
            //     this.position = res.data.position;
            //     this.runStatus = res.data.runStatus;
            //     this.records = res.data.alarm.records.map((n) => {
            //         n.showTime = n.createTime.split(" ")[1];
            //         return n;
            //     });
            //     this.loading = false;
            // })
            
        },
    },
};