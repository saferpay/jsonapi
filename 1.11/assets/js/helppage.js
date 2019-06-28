'use strict';

function expandContainers(elem, recursive) {
    elem.find('a.type-details.in').each(function () {
        var $this = $(this);
        var cTr = $this.closest('tr');
        var tId = $this.attr('href');
        var table = $("<table class=\"table\"></table>");
        var nTr = $("<tr class=\"details\"><td colspan=2></td></tr>");
        $this.toggleClass("in out");
        cTr.after(nTr);
        table.appendTo(nTr.children("td"));
        var copy = $(tId + " tr").clone();
        copy.appendTo(table);
        if (recursive) {
            expandContainers(copy, true);
        }
    });
}

$(document).keydown(function (e) {
    if (e.keyCode === 70 && (e.ctrlKey || e.metaKey)) {
        // ctrl+f to support browser search on container contents
        expandContainers($("body"), true);
    }
});

$("#content").on('click', 'a.type-details', function (e) {
    e.preventDefault();
    if ($(this).hasClass("out")) {
        $(this).toggleClass("in out").closest('tr').nextAll('tr.details').remove();
    } else {
        expandContainers($(this).parent());
    }
});

$(document).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.scroll-top-wrapper').addClass('show');
    } else {
        $('.scroll-top-wrapper').removeClass('show');
    }
});

$('a[href*=#]').click(function () {
    if ($(this).data('toggle') === 'tab') {
        $(this).tab('show');
    } else if ($(this).hasClass("navbar-toggle")) {
        // do nothing
    } else {
        var id = $(this).attr('href') + '';
        id = id.substring(id.indexOf('#') + 1);

        if (!$("a[name=" + id + "]").length)
            return;

        $('html, body').animate({
            scrollTop: $("a[name=" + id + "]").offset().top
        }, 750, 'swing');
    }
});

$(function () {
    $('.lang-sequence, .language-sequence')
        .unwrap('pre').removeClass('language-sequence').removeClass('lang-sequence').css('background', 'none').sequenceDiagram({ theme: 'simple' });
    $('.prettyprint, code[class^=lang-], code[class^=language-]')
        .each(function (i, block) {
            hljs.highlightBlock(block);
        });
    $('section > h1 > a, section > h2 > a')
        .each(function () {
            var $a = $(this);
            if (!$a.hasClass('anchor-link')) {
                $a.addClass('anchor-link').attr('href', '#' + $a.attr('name')).append('<span class="glyphicon glyphicon-link"></span>');
            }
            $a.parent().append($a);
        });
});