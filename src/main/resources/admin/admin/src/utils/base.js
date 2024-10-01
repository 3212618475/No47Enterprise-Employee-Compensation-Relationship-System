const base = {
    get() {
        return {
            url : "http://localhost:8080/qiyeyuangongxinchouguanxi/",
            name: "qiyeyuangongxinchouguanxi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qiyeyuangongxinchouguanxi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业员工薪酬关系系统"
        } 
    }
}
export default base
