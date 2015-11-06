/**
 * Created by zdl on 2015-11-4.
 */
'use strict';
var app = angular.module('myApp', []);
app.controller('userManage', function ($scope) {
    var vm = $scope.vm = {};
    vm.page = {
     size: 5,
     index: 1
     };
     vm.sort = {
     column: 'id',
     direction: -1,
     toggle: function(column) {
         if (column.sortable === false)
            return;

         if (this.column === column.name) {
            this.direction = -this.direction || -1;
         } else {
            this.column = column.name;
            this.direction = -1;
         }
     }
     };
    // 构建模拟数据
    vm.columns = [
        {
            label: 'ID',
            name: 'id',
            type: 'string'
        },
        {
            label: '姓名',
            name: 'name',
            type: 'string'
        },
        {
            label: '粉丝数',
            name: 'followers',
            type: 'number'
        },
        {
            label: '收入',
            name: 'income',
            type: 'currency'
        },
        {
            label: '',
            name: 'actions',
            sortable: false
        }
    ];

    // 供页面中使用的函数
     vm.items = [];
     var MAX_NUM = 10 * 1000;
     function rand(min, max) {
     return min + Math.round(Math.random() * (max-min));
     }
     for (var i = 0; i < MAX_NUM; ++i) {
     var id = rand(0, MAX_NUM);
     vm.items.push({
     id: i + 1,
     name: 'Name' + id, // 字符串类型
     age:18,
     followers: rand(0, 100 * 1000 * 1000), // 数字类型
     birthday: '', // 日期类型
     summary: '这是一个测试' + i,
     income: rand(1000, 100000) // 金额类型
     });
     }

});

app.filter('orderClass', function() {
    return function (direction) {
        if (direction === -1)
            return "glyphicon-chevron-down";
        else
            return "glyphicon-chevron-up";
    }
});
app.filter('paging', function() {
    return function (items, index, pageSize) {
        if (!items)
            return [];

        var offset = (index - 1) * pageSize;
        return items.slice(offset, offset + pageSize);
    }
});
app.filter('size', function() {
    return function (items) {
        if (!items)
            return 0;

        return items.length || 0
    }
});