export default {
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
      antd:true
    }],
  ],
  routes: [{
    path:'/',
    component:'../layout',
    routes: [
      {
        path:'/',
        component: 'HelloWorld'
      },{
        path:'/helloworld',
        component: 'HelloWorld'
      },{
        path:'/Home',
        routes: [
          {
            path:'/home/index',
            component:'Home/Index'
          }
        ]
      }
    ]
  }]
}
