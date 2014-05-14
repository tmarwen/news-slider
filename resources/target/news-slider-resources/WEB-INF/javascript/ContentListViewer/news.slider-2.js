/**
 * Created by exo on 13/05/14.
 */
(function (gj) {

  var NewsSlider = {

    initSlider : function() {

      var pages = gj('#cn_list').find('.cn_page');
      var cnt_pages = pages.length;
      var page = 1;
      var items = gj('#cn_list').find('.cn_item');
      var gjcn_preview = gj('#cn_preview');
      var current = 1;

      items.each(function (i) {
        var item = gj(this);
        item.data('idx', i + 1);

        item.bind('click', function () {
          var dthis = gj(this);
          gj('#cn_list').find('.selected').removeClass('selected');
          dthis.addClass('selected');
          var idx = gj(this).data('idx');
          var dcurrent = gjcn_preview.find('.cn_content:nth-child(' + current + ')');
          var dnext = gjcn_preview.find('.cn_content:nth-child(' + idx + ')');

          if (idx > current) {
            dcurrent.stop().animate({'top': '-300px'}, 600, 'easeOutBack', function () {
              gj(this).css({'top': '310px'});
            });
            dnext.css({'top': '310px'}).stop().animate({'top': '5px'}, 600, 'easeOutBack');
          }
          else if (idx < current) {
            dcurrent.stop().animate({'top': '310px'}, 600, 'easeOutBack', function () {
              gj(this).css({'top': '310px'});
            });
            dnext.css({'top': '-300px'}).stop().animate({'top': '5px'}, 600, 'easeOutBack');
          }
          current = idx;
        });
      });

      gj('#cn_next').bind('click', function (e) {
        var dthis = gj(this);
        gj('#cn_prev').removeClass('disabled');
        ++page;
        if (page == cnt_pages)
          dthis.addClass('disabled');
        if (page > cnt_pages) {
          page = cnt_pages;
          return;
        }
        pages.hide();
        gj('#cn_list').find('.cn_page:nth-child(' + page + ')').fadeIn();
        e.preventDefault();
      });
      gj('#cn_prev').bind('click', function (e) {
        var dthis = gj(this);
        gj('#cn_next').removeClass('disabled');
        --page;
        if (page == 1)
          dthis.addClass('disabled');
        if (page < 1) {
          page = 1;
          return;
        }
        pages.hide();
        gj('#cn_list').find('.cn_page:nth-child(' + page + ')').fadeIn();
        e.preventDefault();
      });
    }
  };
})(gj);