/**
 * Created by zdl on 2015-11-4.
 */
'use strict';

angular.module('scHelper').filter('orderClass', function() {
    return function (direction) {
        if (direction === -1)
            return "glyphicon-chevron-down";
        else
            return "glyphicon-chevron-up";
    }
});