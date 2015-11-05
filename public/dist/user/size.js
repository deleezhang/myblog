/**
 * Created by zdl on 2015-11-4.
 */
'use strict';

angular.module('scHelper').filter('size', function() {
    return function (items) {
        if (!items)
            return 0;

        return items.length || 0
    }
});