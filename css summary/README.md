1、实现文本两端对齐时，text-align: justify -----------demo1.html
bug:
    1、一行文本时不生效
    2、多行文本时，最后一行不生效
resolve:
    1、添加text-align-last: justify;
    2、或者让其不变成一行 用伪类实现
        &::after{
            display: inline-block;
            width: 100%;
            content: '';
            height: 0;
        }
2、多行显示省略号 -----------demo2.html
3、细边框的实现-----------demo3.html
4、分割线的实现-----------demo4.html