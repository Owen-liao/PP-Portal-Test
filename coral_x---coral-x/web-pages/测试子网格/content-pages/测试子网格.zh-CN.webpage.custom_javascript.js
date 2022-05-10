$(document).ready(function () {
    // 修改表格样式
    $("table[role='grid']").attr("class","table table-hover table-striped");
    // 修改列头样式
    $("table[role='grid']> thead > tr").attr("class","active");
});

