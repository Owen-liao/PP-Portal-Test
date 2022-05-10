$(document).ready(function () {
    $("div[class='form-action-container-left']").eq(0).append("<button class='refresh btn-default btn'  type='button' onclick='Auctionmati()'>一个自定义按钮</button>");
    $("div[class='form-action-container-left']").eq(0).append("<button class='refresh btn-default btn'  type='button' onclick='CustomAction()'>调用action</button>");
    
     alert("当前用户为"+$("#userinter").val()+"隐藏关联产品字段");
            $('#vy_reproduct_name').parents('.form-control-cell').css({ "display": "none" });
  });
  function Auctionmati() {
  
    var json_data = {};
    json_data.guid =$("#EntityFormControl_EntityFormView_EntityID").val();
    
    var req = new XMLHttpRequest();
    // Specify the generated URL from your canvas app here
    var url = "https://prod-06.southeastasia.logic.azure.com:443/workflows/fb81a157fc3c4a32827fc9609d1a8378/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=z_rJUvKRR3vxzCk0d9weo0mz8zX0SNLRNAZnyI4u2sQ"
    // send HTTP Request to Power Automate Flow
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(json_data));
    
    alert("刷新数据");
    
  }
  
  function CustomAction(){
    var id=$("#EntityFormControl_EntityFormView_EntityID").val();
    var entity = {};
  entity.vy_note = "这是一个备注";
  
  var req = new XMLHttpRequest();
  req.open("PATCH",  "https://vyung01.crm5.dynamics.com/api/data/v9.1/vy_order_corals("+id+")", true);
  req.setRequestHeader("OData-MaxVersion", "4.0");
  req.setRequestHeader("OData-Version", "4.0");
  req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  req.onreadystatechange = function() {
      if (this.readyState === 4) {
          req.onreadystatechange = null;
          if (this.status === 204) {
             alert("修改成功~");
          } else {
            alert(this.statusText);
             
          }
      }
  };
  req.send(JSON.stringify(entity));
  }
  