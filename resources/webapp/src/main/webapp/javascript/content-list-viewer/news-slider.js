/**
 * Created by exo on 13/05/14.
 */
(function($) {

    var pages = $('#cn_list').find('.cn_page');
    var cnt_pages = pages.length;
    var page = 1;
    var items = $('#cn_list').find('.cn_item');
    var jcn_preview = $('#cn_preview');
    var current = 1;
    var i = 0;

    items.each(function () {
      var item = $(this);
      item.data('idx', i + 1);

      item.bind('click', function () {
        var dthis = $(this);
        $('#cn_list').find('.selected').removeClass('selected');
        dthis.addClass('selected');
        var idx = $(this).data('idx');
        var dcurrent = jcn_preview.find('.cn_content:nth-child(' + current + ')');
        var dnext = jcn_preview.find('.cn_content:nth-child(' + idx + ')');

        if (idx > current) {
          dcurrent.stop().animate({'top': '-300px'}, 600, 'easeOutBack', function () {
            $(this).css({'top': '310px'});
          });
          dnext.css({'top': '310px'}).stop().animate({'top': '5px'}, 600, 'easeOutBack');
        }
        else if (idx < current) {
          dcurrent.stop().animate({'top': '310px'}, 600, 'easeOutBack', function () {
            $(this).css({'top': '310px'});
          });
          dnext.css({'top': '-300px'}).stop().animate({'top': '5px'}, 600, 'easeOutBack');
        }
        current = idx;
      });
    });

    $('#cn_next').bind('click', function (e) {
      var dthis = $(this);
      $j('#cn_prev').removeClass('disabled');
      ++page;
      if (page == cnt_pages)
        dthis.addClass('disabled');
      if (page > cnt_pages) {
        page = cnt_pages;
        return;
      }
      pages.hide();
      $('#cn_list').find('.cn_page:nth-child(' + page + ')').fadeIn();
      e.preventDefault();
    });
    $('#cn_prev').bind('click', function (e) {
      var dthis = j(this);
      $('#cn_next').removeClass('disabled');
      --page;
      if (page == 1)
        dthis.addClass('disabled');
      if (page < 1) {
        page = 1;
        return;
      }
      pages.hide();
      $('#cn_list').find('.cn_page:nth-child(' + page + ')').fadeIn();
      e.preventDefault();
    });

})(jQuery);