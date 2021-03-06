/**
 * config
 */

var path = require('path');
var _ = require('lodash');

var config = {
    // debug 为 true 时，用于本地调试
    debug: true,

    get mini_assets() {
        return !this.debug;
    }, // 是否启用静态文件的合并压缩，详见视图中的Loader

    name: 'TUAteam前端团队 | blog ', // 社区名字
    description: 'Web前端 腾讯TUAteam 团队社区', // 社区的描述
    keywords: '前端交流,前端社区,前端,tuateam,iconfont,javascript,html,css,webfront,nodejs, node, express, connect',

    // 添加到 html head 中的信息
    site_headers: [
        '<meta name="author" content="tuateam@tencent" />',
        '<meta property="wb:webmaster" content="f823bb51f1b4e265" />'

    ],
    site_logo: '/public/images/logo-white.png', // default is `name`
    site_icon: '/public/images/icon.png', // 默认没有 favicon, 这里填写网址
    // 右上角的导航区
    site_navs: [
        // 格式 [ path, title, [target=''] ]
        ['/about', '关于']
    ],
    // cdn host，如 http://cnodejs.qiniudn.com
    site_static_host: '', // 静态文件存储域名
    // 社区的域名
    host: 'tuateam.org',
    // Google tracker ID，名称tuateam，申请地址：http://www.google.com/analytics/
    google_tracker_id: 'UA-100002623-1',

    // mongodb 配置
    db: 'mongodb://127.0.0.1/node_club_dev',
    db_name: 'node_club_dev',


    session_secret: '123i0cm023enkca9i1234', // 务必修改
    auth_cookie_name: 'node_club',

    // 程序运行的端口
    port: 8088,

    // 话题列表显示的话题数量
    list_topic_count: 12,
    list_issue_count: 15,
    list_activity_count: 15,

    // 限制发帖时间间隔，单位：毫秒
    post_interval: 2000,

    // RSS配置
    rss: {
        title: 'TUAteam：web技术社区',
        link: 'http://tuateam.org/',
        language: 'zh-cn',
        description: 'TUAteam：web技术社区',
        //最多获取的RSS Item数量
        max_rss_items: 50
    },

    // 邮箱配置
    mail_opts: {
        host: 'smtp.qq.com',
        port: 465,
        secureConnection: true,
        auth: {
            user: 'xxx@qq.com',
            pass: 'xxx'
        }
    },
    //weibo app key
    weibo_key: 10000000,
    weibo_id: 'your_weibo_id',

    // admin 可删除话题，编辑标签，设某人为达人
    admins: {
        "test": true,  // 测试账号 发布删掉
        "shirly": true,
        "pastest": true,
        "tuateam": true
    },

    // github 登陆的配置
    GITHUB_OAUTH: {
        clientID: 'f3f0e2ea495a825f7d09',
        clientSecret: 'xxx',
        callbackURL: 'http://tuateam.org/auth/github/callback'
    },
    //本地测试github
    TEST_GITHUB_OAUTH: {
        clientID: 'cb1872e84af2cb965cc8',
        clientSecret: 'xxx',
        callbackURL: 'http://tuateam.org/auth/github/callback'
    },
    // 是否允许直接注册（否则只能走 github 的方式）
    allow_sign_up: true,

    // newrelic 是个用来监控网站性能的服务
    newrelic_key: '538de7da0d3122f717f77b7b2ed1a39f8532293c',

    //7牛的access信息，用于文件上传
    qn_access: {
        accessKey: 'xxx',
        secretKey: 'xxx',
        bucket: 'tuateam',
        domain: 'http://oqjublpec.bkt.clouddn.com',
        uploadURL: 'http://up-z1.qiniu.com'
    },

    //文件上传配置
    //注：如果填写 qn_access，则会上传到 7牛，以下配置无效
    upload: {
        path: path.join(__dirname, '../upload/'),
        url: '/public/upload/'
    },

    //友情连接
    friends: [
        ['w3cTech', 'http://www.w3ctech.com/'],
        ['w3cplus', 'http://www.w3cplus.com/'],
        ['前端乱炖', 'http://www.html-js.com/']
    ],

    // 版块
    tabs: [
        ['weekly', '周刊'],
        ['html', 'HTML&HTML5'],
        ['rebuild', 'CSS/重构'],
        ['js', 'javascript技术'],
        ['network', 'HTTP网络'],
        ['secure', 'Web安全'],
        ['browser', '浏览器'],
        ['build', '构建工具'],
        ['performance', '性能'],
        ['lib', '前端库'],
        ['node', 'nodeJS全栈'],
        ['mobile', '移动开发'],
        ['tools', '工具建设'],
        ['op', '运营'],
        ['other', '其他']
    ],
    tabKeys: ['weekly',
            'html',
            'rebuild',
            'js',
            'network',
            'secure', 
            'browser',
            'build', 
            'performance', 
            'lib',
            'node', 
            'mobile', 
            'tools', 
            'op',
            'other'],
    loginNotJump: [
        '/active_account', //active page
        '/reset_pass', //reset password page, avoid to reset twice
        '/signup', //regist page
        '/search_pass' //serch pass page
    ],
    // 正则配置
    regExps: {
        email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        loginname: /^[\w]{5,20}$/,
        pass: /^[\w~`!@#$%\^&*()\-+=;:'",.<>\/?\\|\[\]{}]{6,20}$/,
        name: /^[\u4e00-\u9fa5]{2,5}$/,
        company: /^[\s\S]{1,50}$/,
        team: /^[\s\S]{0,50}$/,
        topicTitle: /^[\s\S]{1,100}$/,
        topicContent: /^[\s\S]{1,}$/
    },
    // 文章预览的最大长度
    topic_summary_len: 500,
    weibo: {
        appKey: '2157527702',
        appSecret: 'xxx',
        authCallback: 'http://tuateam.org/auth/weibo/auth_back'
    },
    setting_binding_page: '/setting/binding',
    wechat_validate: {
        token: 'wechattuateam',
        appid: 'xxx',
        encodingAESKey: 'xxx',
        AppSecret: 'xxx'
    },
    wechat_push_num: 1
};

config.tabsMap = {};
_.each(config.tabs, function(item) {
    config.tabsMap[item[0]] = item[1];
});
module.exports = config;
