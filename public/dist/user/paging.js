/**
 * Created by zdl on 2015-11-4.
 */
'use strict';
var app = angular.module('myApp', []);
app.filter('paging', function() {
    return function (items, index, pageSize) {
        if (!items)
            return [];

        var offset = (index - 1) * pageSize;
        return items.slice(offset, offset + pageSize);
    }
});