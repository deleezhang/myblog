# myblog
博客项目（测试）

技术栈：
    node，mongodb，Mongoose，
    express，Promise，cheerio
    angularJS，bootstrap
    
业务结构：
        
    1.后台管理结构：
    业务表：
            （1）抓取URL表
                url、队列顺序、创建时间
            （2）核心字
                核心字、队列顺序、创建时间
            （3）文章列表
                博主头像、博主主页、博主名称、博文标题、副标题、摘要、博文内容、博文独立网址、发布时间、点赞数、评论数。
            （4）抓取业务逻辑表
                逻辑名称、逻辑路径
            （5）评论信息表
                文章id、评论内容、评论时间
             系统表：
            （1）user
                userid、用户名、密码、roleid、创建时间、是否启用(默认是)、头像、邮箱
            （2）role
                角色名称、menuid、创建时间
            （3）menus
                菜单名称、菜单url、创建时间
    2.中间层说明：
        （1）cheerio
    
    3.前端说明：
        （1）
 
