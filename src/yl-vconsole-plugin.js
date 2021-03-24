/**
 * vConsole-resouces Plugin
 *
 * @author wangeastsea
 */

// import './style.less';
const getStorageBykey =  function (key, type) {
    return window.localStorage.getItem(`${key}`) && window.localStorage.getItem('userToken').replace(`${type}@`, '') 
}
class VConsoleYlPlugin {
    constructor(vConsole) {
        this.vConsole = vConsole;
        return this.init();
    }

    init() {
        const switchEnv = new window.VConsole.VConsolePlugin('switchEnv', '切换连接环境');
        let userId = getStorageBykey('userId' , 'number')
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
                            <div style="padding:15px;">
                                <span style="font-size: 20px;color: orange">用户ID：</span>
                                <div id="userId" style="padding:10px;font-size: 16px;background-color:#f7f8fa;">${userId}</div>
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
        // 底部的按钮 - 刷新
        switchEnv.on('addTool', function(callback) {
            let Reload = {
                name: 'Reload',
                onClick: function(e) {
                    location.reload()
                    console.log('e', e)
                }
            }
            let delToken = {
                name: 'delToken',
                onClick: function(e) {
                    window.localStorage.removeItem('userToken')
                    console.log('e', e)
                }
            }
            let cpToken = {
                name: 'cpToken',
                onClick: function(e) {
                    let textarea = document.createElement('textarea')
                    let userToken = getStorageBykey('userToken' , 'string')
                    textarea.value = userToken
                    document.body.appendChild(textarea)
                    textarea.select()
                    let isCopy = document.execCommand('copy')//isCopy可以表示是否调用execCommand()成功
                    if (isCopy) {
                        window.alert('copy success')
                        console.log('copy success')
                    }
                    document.body.removeChild(textarea)
                    console.log('e', e)
                }
            }
            callback([Reload, cpToken, delToken])
        })
        // 底部的按钮 - 删除用户token
        // 底部的按钮 - 复制用户token
        this.vConsole.addPlugin(switchEnv);
        return switchEnv;
    }
}

window.VConsoleYlPlugin = VConsoleYlPlugin

export default VConsoleYlPlugin