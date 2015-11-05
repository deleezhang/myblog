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
    // ����ģ������
    vm.columns = [
        {
            label: 'ID',
            name: 'id',
            type: 'string'
        },
        {
            label: '����',
            name: 'name',
            type: 'string'
        },
        {
            label: '��˿��',
            name: 'followers',
            type: 'number'
        },
        {
            label: '����',
            name: 'income',
            type: 'currency'
        },
        {
            label: '',
            name: 'actions',
            sortable: false
        }
    ];
    // ��ҳ����ʹ�õĺ���
    vm.age = function(birthday) {
        return moment().diff(birthday, 'years');
    };

    vm.items = [];
    var MAX_NUM = 10 * 1000;
    function rand(min, max) {
        return min + Math.round(Math.random() * (max-min));
    }
    for (var i = 0; i < MAX_NUM; ++i) {
        var id = rand(0, MAX_NUM);
        vm.items.push({
            id: i + 1,
            name: 'Name' + id, // �ַ�������
            followers: rand(0, 100 * 1000 * 1000), // ��������
            birthday: moment().subtract('day', rand(365, 365 * 50)).toDate(), // ��������
            summary: '����һ������' + i,
            income: rand(1000, 100000) // �������
        });
    }
});