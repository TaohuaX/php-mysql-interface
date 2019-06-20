require.config({
        paths: {
                jquery: './lib/jquery.min',
                definemodule: './definemodule'
        }
})
require(['jquery','definemodule'], function ($, de) {
        $(function(){
                $('body').append('<h1>这一天天的</h1>');
                de.inner();
        })
})