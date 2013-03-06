// jquery.tldr.js
//
// Micro Read-more Script
// Substring paragraphs that are verbose and long, while making them expandable with a "more" link.
//
// Date: 06, March 2013
// Author: Nijiko Yonskai
// Copyright: Mashape 2013
// License: MIT
(function ($) {
  var tldr = function (opts) {
    var options = $.extend({}, tldr.defaults, opts), $this;
    $(this).each(function() {
      $this = $(this);
      $this.data("o", options);
      tldr.shorten($this);
    });
  };

  tldr.defaults = {
    text: {
      more: '&hellip;',
      less: '&laquo;'
    },
    length: 136
  };

  tldr.shorten = function ($this) {
    var html = $this.html(), data = $this.data("o");

    if (html.length < data.length) return;
    else $this.data("original", html.trim());

    var less = data.text.less,
      more = data.text.more,
      position = html.substr(0, data.length).lastIndexOf(" "),
      text = html.trim().substring(0, position).split(" ").slice(0, -1).join(" "),
      container = $('<span class="more-contaner">' + text + '</span>'),
      link = $('<span class="more-link">' + data.text.more + '</span>');

    link.click(function (e) {
      var original = (container.hasClass('more-original'));
      container[original ? 'removeClass' : 'addClass']('more-original');
      container.html(original ? text : $this.data("original"));
      link.html(original ? more : less);
    });

    $this.html(container).append(link);
  };

  $.fn.tldr = tldr;
})(jQuery);