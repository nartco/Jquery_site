$(function () {
    
    // Auto-complete Field - require jquery-ui autocomplete --------------------
    
    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _create: function () {
            this._super();
            this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
        },
        _renderMenu: function (ul, items) {
            var self = this;

            $.each(items, function (index, item) {
                ul.append("<li class='ui-autocomplete-category'>" + item.parent_name + "</li>");

                for (i = 0; i < item.activities.length; i++) {
                    self._renderItemData(ul, item.activities[i]);
                }
            });
        },
        _renderItem: function(ul, item) {
            var $li = $("<li class=\"ui-menu-item-wrapper\"></li>").html(item.activite_name);
            $li.attr("aria-label", item.activite_name);
            return $li.appendTo(ul);
        }
    });
    
    var activities_search = function(obj) {
        var $obj = $(obj);
        
        var parent_in = $obj.data('parent');
        var child_in  = $obj.data('child');
        
        $obj.catcomplete({
            minLength: 4,
            source: function (request, response) {
                $.ajax({
                    url: baseUrl + 'home/ws_search_activities/',
                    dataType: 'json',
                    method: 'post',
                    data: {'act_search': $obj.val()},
                    success: function (data) {
                        response(data.activities);
                    }
                });
            },
            select: function (event, ui) {
                $(child_in).val(ui.item.activite_id);
                $(parent_in).val("domain-" + ui.item.parent_id);
                $obj.val(ui.item.activite_name);
                return false;
            }
        });
    };
    
    $(".activities-search-auto").each(function() {
        activities_search(this);
    });
    
    // Dropdown activity search ------------------------------------------------
    
    $(".activities-search-parent").change(function() {
        var out_in = $(this).data('target');
        
        if (out_in && out_in !== 'undefined') {
            var value = $(this).val();
            $(out_in).val(value);
        }
    });
    
    $(".activities-search-child").change(function() {
        var out_in = $(this).data('target');
        
        if (out_in && out_in !== 'undefined') {
            var value = $(this).val();
            $(out_in).val(value);
        }
    });

});