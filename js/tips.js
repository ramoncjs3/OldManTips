var prompt = function (message, style, time)
{
    style = (style === undefined) ? 'alert-success' : style;
    time = (time === undefined) ? 1200 : time;
    $('<div id="promptModal">')
        .appendTo('body')
        .addClass('alert '+ style)
        .css({"display":"block",
            "z-index":99999,
            "left":($(document.body).outerWidth(true) - 120) / 2,
            "top":($(window).height() - 45) / 2,
            "position": "absolute",
            "padding": "20px",
            "border-radius": "5px"})
        .html(message)
        .show()
        .delay(time)
        .fadeOut(10,function(){
            $('#promptModal').remove();
        });
};

// 成功提示
var success_prompt = function(message, time)
{
    prompt(message, 'alert-success', time);
};

// 失败提示
var fail_prompt = function(message, time)
{
    prompt(message, 'alert-danger', time);
};

// 提醒
var warning_prompt = function(message, time)
{
    prompt(message, 'alert-warning', time);
};

// 信息提示
var info_prompt = function(message, time)
{
    prompt(message, 'alert-info', time);
};

// 信息提示
var alert_prompt = function(message, time)
{
    prompt(message, 'alert-pormpt', time);
};