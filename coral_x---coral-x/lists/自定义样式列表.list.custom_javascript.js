$(document).ready(function () {
    //ChangeGridButtons();
});
ChangeGridButtons = function () {
    $(".entity-grid").on("loaded", function () {

        if ($(this).find(".view-grid .table tbody tr td:last-child ul.dropdown-menu > li > a.details-link, .view-grid .table tbody tr td:last-child ul.dropdown-menu > li > a.edit-link, .view-grid .table tbody tr td:last-child ul.dropdown-menu > li > a.deactivate-link, .view-grid .table tbody tr td:last-child ul.dropdown-menu > li > a.delete-link, .view-grid .table tbody tr td:last-child ul.dropdown-menu > li > a.disassociate-link").length > 0) {
            var rows = $(this).find(".view-grid .table tbody tr td:last-child");
            $.each(rows, function (index, row) {
                var actions = $(row).find("ul.dropdown-menu > li > a.details-link, ul.dropdown-menu > li > a.edit-link, ul.dropdown-menu > li > a.deactivate-link, ul.dropdown-menu > li > a.delete-link, ul.dropdown-menu > li > a.disassociate-link");
                $.each(actions, function (index, action) {
                    var li = $(action).parent();
                    var iconClass = $(action).find("span").attr("class");
                    $(action).append("<span class='" + iconClass + "‘></span>");
                    $(action).append($(action).find("span"));
                    $(action).css("font-size", "18px");
                    $(action).css("text-decoration", "none");
                    $(action).css("padding-right", "4px");
                    $(row).append($(action));
                    li.remove();
                });
                var actions = $(row).find("ul.dropdown-menu > li > a.workflow-link");
                if (actions.length > 0) {
                    var divDropDown = $(row).find("div.dropdown");
                    $(divDropDown).css("display", "unset");
                    $(divDropDown).append("<a class=’dropdown-link’></a>");
                    var aDropDown = $(divDropDown).find("a.dropdown-link");
                    $(aDropDown).attr("aria-expanded", "false");
                    $(aDropDown).attr("data-toggle", "dropdown");
                    $(aDropDown).css("text-decoration", "none");
                    $(aDropDown).css("cursor", "pointer");
                    $(aDropDown).append($(divDropDown).find("span"));
                    // move dropdown to the far right
                    $(divDropDown).appendTo(row);
                }
                $(row).find("div.dropdown").find("button").remove();
            });
        }
    });
};

//margin-top: 5px;
    //border-radius: 5px;
    //margin-right: 10px;