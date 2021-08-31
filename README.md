# Getting Started with Match Your Card - Mason Group Code Test

[https://github.com/paganjin/match-card-game]

一个记忆型翻牌游戏，总共三个 level，分别是 2x2, 4x4, 6x6
每一次成功匹配的分数计算 = 当前等级 ^ 2 x 当前倒计时剩余的时间

# 游戏流程

1. 用户点击 Start Game，更新游戏界面。level 1， 四张卡片。倒计时开始。
2. 用户点击卡片，
   如果该卡片未被翻开过
   翻开卡片，如果这是翻开的第二张卡片，检查两张卡片是否一致
   如果一致，持续打开卡片，增加玩家分数
   否则，触发 1.5 秒的惩罚时间，1.5 秒后盖上这两张卡片 （惩罚时间内不可翻开其他卡片）
   如果已经被翻开
   把该卡片盖上
3. 如果 60s 已到，所有卡片并未全部翻转，游戏结束，弹出对话框显示当前分数。
4. 如果 60s 内，所有卡片全部翻转，进入下一 level。如果当前为第三个 level，结束游戏，弹出对话框显示当前分数

游戏最终完成效果参考： [https://lazebear.github.io/Mem/]
项目提供了一些简单的初始代码，但是可以使用 react 完成

# 最终评分标准：

- 代码整洁度，可读性，可维护性
- level 1 实现
- level 2 实现
- level 3 实现
- 游戏核心翻牌逻辑
- 开始按钮
- 倒计时
- 分数结算

# 代码提交要求：

1. 所有代码上传 github
2. 创建一个 github page 用来展示你编写的游戏
3. 添加一个 readme 文件，包含这个 github page 的链接
4. 填写这个 google 问卷，[https://forms.gle/8hNTEN2DfUtiCP6TA]

# 提交截止时间 8月31日晚
