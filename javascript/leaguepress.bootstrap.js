(function ($) {
    $(function () {
        $("#build").leaguepressbuild({});

        function refreshList() {
            $.ajax({
                url : "?leaguepress"
            }).done(function (data) {
                    if ($.isArray(data)) {
                        $("#build-list").empty();
                        $.each(data, function (index, value) {
                            var i = $("<li/>").html(value.id + " - " + value.title).data("build", value);

                            i.append($("<span/>").css({"padding-left":"10px"}).html("delete").attr("data-id", value.id).click(function () {
                                var id = $(this).attr("data-id");

                                $.ajax({
                                    type : "DELETE",
                                    url : "?leaguepress&id=" + id
                                }).done(function (data) {
                                        refreshList();
                                    });
                            }));

                            var load = $("<span/>").css({"padding-left":"10px"}).html("load")
                            i.append(load);

                            load.click(function () {
                                var d = $(this).closest('li').data("build");

                                $("#build-title").val(d.title);
                                $("#build-description").val(d.description);
                                $("#build-id").val(d.id);
                                $("#build").leaguepressbuild("load", d.build);
                            });
                            $("#build-list").append(i);
                        });
                    }
                });
        };
        refreshList();

        $("#build-save").on("click", function () {
            var bld = $("#build").leaguepressbuild("save");

            var stringified = {
                build : bld,
                id : $("#build-id").val(),
                title : $("#build-title").val(),
                description : $("#build-description").val()
            };

            $.ajax({
                type : "POST",
                data : JSON.stringify(stringified),
                url : "?leaguepress"
            }).done(function (data) {
                    if (data && data !== "error") {
                        alert("saved!");
                    }
                    refreshList();
                });
        });

        $("#build-new").on("click", function () {
            $("#build").leaguepressbuild("clear");
            $("#build-title").val('');
            $("#build-description").val('');
            $("#build-id").val('');
        });

        $('.champion-info').leagueTooltip({
            template : loadTemplate('champion_info.handlebars', "champion_info.handlebars"),
            codeAttributeName : "data-champion-code",
            target : $('body')
        });
    });
})(jQuery);