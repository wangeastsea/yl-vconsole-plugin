/**
 * vConsole-resouces Plugin
 *
 * @author wangeastsea
 */

// import './style.less';

class VConsoleYlPlugin {
    constructor(vConsole) {
        this.vConsole = vConsole;
        return this.init();
    }

    init() {
        const switchEnv = new window.VConsole.VConsolePlugin('switchEnv', '切换连接环境');

        switchEnv.on('init', function() {
            console.log('My plugin init')
        })

        switchEnv.on('renderTab', function(callback) {
            var html = `<div>
                            <div style="font-size: 20px;color: #fff;background-color:#285ac8;">点击以上按钮，可以进行环境的切换</div>
                            <div style="padding:15px;">
                                <span style="font-size: 20px;color: orange">当前链接：</span>
                                <div id="url" style="padding:10px;font-size: 16px;background-color:#f7f8fa;">${window.location.href}</div>
                            </div>
                        </div>`
            callback(html)
        })

        switchEnv.on('showConsole', function() {
            // do something
            document.querySelector('#url').textContent =
                window.location.href
        })
        // 顶部的bar
        switchEnv.on('addTopBar', function(callback) {
            var btnList = []
            btnList.push({
                name: 'dev',
                className: '',
                onClick: function() {
                    window.location.href =
                        `http://m-dev.yxzq.com` +
                        window.location.pathname
                }
            })
            btnList.push({
                name: 'sit',
                className: '',
                onClick: function() {
                    window.location.href =
                        `http://m1-sit.yxzq.com` +
                        window.location.pathname
                }
            })
            btnList.push({
                name: 'uat',
                className: '',
                onClick: function() {
                    window.location.href =
                        `http://m1-uat.yxzq.com` +
                        window.location.pathname
                }
            })
            btnList.push({
                name: 'pro',
                className: '',
                onClick: function() {
                    window.location.href =
                        `https://m.yxzq.com` +
                        window.location.pathname
                }
            })
            callback(btnList)
        })
        // 底部的按钮
        switchEnv.on('addTool', function(callback) {
            var button = {
                name: 'Reload',
                onClick: function(e) {
                    location.reload()
                    console.log('e', e)
                }
            }
            callback([button])
        })
        this.vConsole.addPlugin(switchEnv);
        return switchEnv;
    }
}

window.VConsoleYlPlugin = VConsoleYlPlugin

export default VConsoleYlPlugin