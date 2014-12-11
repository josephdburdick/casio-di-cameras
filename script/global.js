function sendMail(message,section,id,emailTo,emailFrom,postAddress)
{
  // alert("sendmail");
   var page = window.location.href;
   var re = /.*\/(.*)\.s?html.*/;
   var results = page.match(re);
    //alert(results);
   var page = (results != null) ? results[1] : "index";
 //  postAddress = "share.php";
  
   $.ajax({
        type: "POST",
        url: postAddress,
        data: "emailFrom=" + emailFrom + "&message=" + message + "&emailTo=" + emailTo + "&id=" + id + "&section=" + section + "&page=" + page,
        success: function(msg){
            if(msg=="Success=true")
            {
              //alert(msg);
            }else{
                alert("Failure\n"+msg);
                }
        }
    });
    
    //alert("test");
    //,
      //  data: "emailFrom=" + emailFrom + "&message=" + message + "&emailTo=" + emailTo + "&id=" + id + "&section=" + section + "&page=" + results[1],
    
}

function isWithin (e, $obj) {
  return (
    ( ($obj.offset().left<e.pageX) && (e.pageX<($obj.offset().left+$obj.outerWidth() )) ) &&
    ( ($obj.offset().top <e.pageY) && (e.pageY<($obj.offset().top +$obj.outerHeight())) )
  ) ? true : false;
}

function hideFlash(menu) {
  if ((menu!="explore") && (menu!="features") && (menu!="cameras")) { return; }
  var menuname = "#head_" + menu + "_menu";
  $(menuname).hide();
}

function setFlashMenuHeight(height, menu) {
  //alert("height: " + height + ", menu: " + menu);
  if ((menu!="explore") && (menu!="features") && (menu!="cameras")) { return; }
  var $menuobj = $("#head_" + menu + "_menu");
  var xmlpath = 'Flash/_assets/xml/' + menu + '.xml';
  var swf = "drop_menu.swf";
  var width = 220;
  if (menu=="cameras") {
    swf = "drop_menu_pop.swf";
    width = 300;
  }
  var mySwf = "";
  var expSwf = "";
  if ( $.flashPlayerVersion[0]<10 ) {
    expSwf="expressInstall.swf";
  }
  $menuobj.css("height",height+"px");
  $menuobj.height(height);
  $("#bs_online #bs_vendors").css("overflow-x","visible");
  $("#bs_online #bs_vendors").css("overflow","visible");
  if (expSwf=="") { mySwf = swf; } else { mySwf = expSwf; }
  $menuobj.flash({
    swf: mySwf,
    width: width,
    height: height,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    flashvars: {
      xmlpath: xmlpath,
      checkHeight: 'false'
    },
    params: {
      wmode: 'transparent'
    }
  });
  
}
function isValidZipCode(value) {
   var re = /^\d{5}([\-]\d{4})?$/;
   return (re.test(value));
}

function executeSearch() {
    $("#bs_camera li img").each(function() {
        if ($(this).attr("src").indexOf("_on")>-1) {
            camera = "EX" + "-" + $(this).attr("alt").split("EX")[1];
        }
    });
    $("#cii_iFrame").attr("src","http://casio.links.channelintelligence.com/pages/prices.asp?nRGID=2681&sSKU="+camera);

}
/*
  var searchType = "";
  var zip = $("#bd_input input").attr("value");
  var radius = $("#bd_select select").val();
  var cameras = "";
  
  if ($("#btn_online img").attr("src").indexOf("_off")>-1) {
    searchType = "offline";
    $("#bs_online").hide();
    $("#bs_offline").show();
  } else {
    searchType = "online";
    $("#bs_offline").hide();
    $("#bs_online").show();
  }
  $("#bs_camera li img").each(function() {
    if ($(this).attr("src").indexOf("_on")>-1) {
      cameras += "EX" + "-" + $(this).attr("alt").split("EX")[1] + ",";
    }
  });
  if (cameras!="") { cameras=cameras.substr(0,cameras.length-1); } else { return; }
  if ((searchType=="offline") && ((zip=="") || (zip=="Zip")) && (radius=="") ) { return; }
  $("#bs_vendors ul").html("");
  $("#bs_offline_loc ul").html("");
  $("#bs_offline_map").html("");
 //alert("data: storetype=" + searchType + "&camera=" + cameras + "&zip=" + zip + "&radius=" + radius);
  $.ajax({
    type: "POST",
    url: "search.php",
    data: "storetype=" + searchType + "&camera=" + cameras + "&zip=" + zip + "&radius=" + radius,
    success: function(msg){
        
  
      if (searchType=="online") {
        $("#bs_vendors ul").html(msg);
      } else {
        $("#bs_offline_loc ul").html(msg);
        $("#bs_offline_loc ul li:first .viewmaplink").each(function() {
          var mapimg= $(this).attr("data");
          $("#bs_offline_map").html("<img src=\""+mapimg+"\" alt=\"\" />");
        });
      }
      $("#bs_offline_loc .viewmaplink").click(function() {
        var mapimg= $(this).attr("data");
        $("#bs_offline_map").html("<img src=\""+mapimg+"\" alt=\"\" />");
      });
      
      if (($("#bs_vendors ul li").size()==0) && ($("#bs_offline_loc ul li").size()==0)) {
       $("#bs_offline_map").html('<li><div id="wheretobuy_noresults_map">No Results Available</div></li>');        
       $("#bs_vendors ul").html('<li><div id="wheretobuy_noresults">No Results Available</div></li>');
       $("#bs_offline_loc ul").html('<li><div id="wheretobuy_noresults">No Results Available</div></li>');
      }
      
      //if (msg.indexOf("Warning") > -1) 
      //{
        //$("#bs_offline_map").html('<li><div id="wheretobuy_noresults_map">No Results Available</div></li>');
        //$("#bs_vendors ul").html('<li><div id="wheretobuy_noresults">No Results Available</div></li>');
        //$("#bs_offline_loc ul").html('<li><div id="wheretobuy_noresults">No Results Available</div></li>');
      //}
    }
  });
}
*/
function isValidModel(model) {
  switch(model) {
    case "exfh20":
      return true;
    break;
    case "exf1":
      return true;
    break;
    case "exfc100":
      return true;
    break;
    case "exfs10":
      return true;
    break;
    case "exs12":
      return true;
    break;
    case "exs5":
      return true;
    break;
    case "exz400":
      return true;
    break;
    case "exz270":
      return true;
    break;
    case "exz29":
      return true;
    break;
	case "exz33":
      return true;
    break;
    case "exz35":
      return true;
    break;
    case "exs7":
      return true;
    break;
	case "exs8":
      return true;
    break;
	case "exz280":
      return true;
    break;
	case "exz90":
      return true;
    break;
	case "exz450":
      return true;
    break;
    case "exg1":
      return true;
    break;
    case "exmobile":
      return true;
    break;
    case "exfh25":
      return true;
    break;
    case "exfc150":
      return true;
    break;
    case "exfh100":
      return true;
    break;
    case "exh15":
      return true;
    break;
    case "exz2000":
      return true;
    break;
    case "exz550":
      return true;
    break;
    default:
      return false;
  }
}

function howManySelected() {
  var ctr=0;
  $("#bs_camera ul li img").each(function() {
    var $self = $(this);
    var selfsrc = $self.attr("src");
    if (selfsrc.indexOf("_on")>-1) {
      ctr++;
    }
  });
  return ctr;
}

function toggleModel(model) {
  model = model.toLowerCase();
  $("#bs_camera ul li img").each(function() {
    var $self = $(this);
    var selfsrc = $self.attr("src");
    if (selfsrc.indexOf(model)>-1) {
      if (selfsrc.indexOf("_off")>-1) {
        $self.attr("src",selfsrc.replace("_off","_on"));
      } else {
        if (howManySelected()>1) {
          $self.attr("src",selfsrc.replace("_on","_off"));
        }
      }
    }
  });
}

function clearAllModels() {
  $("#bs_camera ul li img").each(function() {
    var $self = $(this);
    var selfsrc = $self.attr("src");
    if (selfsrc.indexOf("_on")>-1) {	
 		$self.attr("src",selfsrc.replace("_on","_off"));
    }
  });
}

function openFlashWindow(section, id) {
  
  var section = section || "";
  var id = id || "";
  var $emailWindow = $("#emailFlash");
  var mySwf = "";
  var expSwf = "";
  if ( $.flashPlayerVersion[0]<10 ) {
    expSwf="expressInstall.swf";
  }
  
  $emailWindow.show();
  
  if (expSwf=="") { mySwf = "share.swf"; } else { mySwf = expSwf; }
  $emailWindow.flash({
    swf: mySwf,
    width: 651,
    height: 370,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
	  flashvars: {
        section: section,
        id: id,
        shareURL: 'share.php'
      }
  });
}

function closeFlashWindow() {
  var $emailWindow = $("#emailFlash");
  $emailWindow.html("");
  $emailWindow.hide();
}

function revertHome() {
  var mySwf = "";
  var expSwf = "";
  
  var deepLinkSection = $(document).getUrlParam("section");
  if ( $.flashPlayerVersion[0]<10 ) {
    expSwf="expressInstall.swf";
  }
  
  $("body.home #body_featurestage").width(675);
  if (expSwf=="") {
    mySwf = "homePageNew.swf";
    if ($("body").hasClass("cameras")) {
      deepLinkSection = "landing";
      mySwf = "lifestyle.swf";
    }
  } else { mySwf = expSwf; }
  /*$("body.home #featurestage_left").flash({
    swf: mySwf,
    width: 675,
    height: 467,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
	  flashvars: {
      section: deepLinkSection
    }
  });*/
}

function printConfigPage() {
  window.print();
}


$(function () {
  var mySwf = "";
  var expSwf = "";
  if ( $.flashPlayerVersion[0]<10 ) {
    expSwf="expressInstall.swf";
  }

 // Header code
$(function () {    
    $("#head_" + $("body").attr("id")).each(function() {
      $(this).addClass("current_page");
      $(this).find("img").attr("src",$("#head_" + $("body").attr("id") + " img").attr("src").replace("_off","_on"));
    });
    
    $("#header .head_menu").each(function () {
        $(this).mouseover(function () {
            if (!$(this).hasClass("current_page"))
            {
                
                $img = $(this).find("img");                
              //  alert($img.attr("src").replace("_off","_on"));
                $img.attr("src",$img.attr("src").replace("_off","_on"));
             }
                if ($(this).hasClass("has_submenu")) {

                    var menuname = $(this).attr("id").split("head_")[1];
                    $("#head_" + menuname + "_menu").show();
                    var xmlpath = 'Flash/_assets/xml/' + menuname + '.xml';
                    var swf = "drop_menu.swf";
                    var width = 220;
                    if (menuname=="cameras") {
                      swf = "drop_menu_pop.swf";
                      width = 300;
                    }
                    if (expSwf=="") { mySwf = swf; } else { mySwf = expSwf; }
                    $("#head_" + menuname + "_menu").flash({
                      swf: mySwf,
                      width: width,
                      height: 200,
                      hasVersion: 10,
                      expressInstaller: 'expressInstall.swf',
                      wmode: 'transparent',
                      flashvars: {
                        xmlpath: xmlpath,
                        checkHeight: 'true'
                      },
                      params: {
                        wmode: 'transparent'
                      }
                    });
                }
              // has class
        }).mouseout(function () {
            if ($(this).hasClass("has_submenu")) {
              
                var menuname = $(this).attr("id").split("head_")[1];
                $("#head_" + menuname + "_menu").hide();               
            }
            if (!$(this).hasClass("current_page")) {
                $img = $(this).find("img"); 
                $img.attr("src",$img.attr("src").replace("_on","_off"));
                
                
            }
        });
    });
    
    $("#header .head_submenu").each(function() {
      var $cursubmenu = $(this);      
      $cursubmenu.mouseover(function() {
        $cursubmenu.show();
      }).mouseout(function() {
        $("#bs_online #bs_vendors").css("overflow-x","auto");
        $cursubmenu.hide();
      });
      
    });
    
});
  
  // Product Page Code
  // Determine Product Model
  
  var model="exfh20";
  var modeldisp = "EX-FH20";
  if ($("body.exf1").length>0) { model="exf1"; modeldisp="EX-F1"; }
  else if ($("body.exfc100").length>0) { model="exfc100"; modeldisp="EX-fc100"; }
  else if ($("body.exfh20").length>0) { model="exfh20"; modeldisp="EX-FH20"; }
  else if ($("body.exfs10").length>0) { model="exfs10"; modeldisp="EX-FS10"; }
  else if ($("body.exs5").length>0) { model="exs5"; modeldisp="EX-S5"; }
  else if ($("body.exs12").length>0) { model="exs12"; modeldisp="EX-S12"; }
  else if ($("body.exz29").length>0) { model="exz29"; modeldisp="EX-Z29"; }
  else if ($("body.exz270").length>0) { model="exz270"; modeldisp="EX-Z270"; }
  else if ($("body.exz400").length>0) { model="exz400"; modeldisp="EX-Z400"; }
  else if ($("body.exh10").length>0) { model="exh10"; modeldisp="EX-H10"; }
  else if ($("body.exz33").length>0) { model="exz33"; modeldisp="EX-Z33"; }
  else if ($("body.exz35").length>0) { model="exz35"; modeldisp="EX-Z35"; }
  else if ($("body.exs7").length>0) { model="exs7"; modeldisp="EX-S7"; }
  else if ($("body.exs8").length>0) { model="exs8"; modeldisp="EX-S8"; }
  else if ($("body.exz280").length>0) { model="exz280"; modeldisp="EX-Z280"; }
  else if ($("body.exz90").length>0) { model="exz90"; modeldisp="EX-Z90"; }
  else if ($("body.exz450").length>0) { model="exz450"; modeldisp="EX-Z450"; }
  else if ($("body.exg1").length>0) { model="exg1"; modeldisp="EX-G1"; }
  else if ($("body.exfc150").length>0) { model="exfc150"; modeldisp="EX-FC150"; }
  else if ($("body.exfh25").length>0) { model="exfh25"; modeldisp="EX-FH25"; }
  else if ($("body.exfh100").length>0) { model="exfh100"; modeldisp="EX-FH100"; }
  else if ($("body.exh15").length>0) { model="exh15"; modeldisp="EX-H15"; }
  else if ($("body.exz2000").length>0) { model="exz2000"; modeldisp="EX-Z2000"; }
  else if ($("body.exz550").length>0) { model="exz550"; modeldisp="EX-Z550"; }
  else if ($("body.exh5").length>0) { model="exh5"; modeldisp="EX-H5"; }
  else if ($("body.exs200").length>0) { model="exs200"; modeldisp="EX-S200"; }
  else if ($("body.exz800").length>0) { model="exz800"; modeldisp="EX-Z800"; }
  else if ($("body.exz16").length>0) { model="exz16"; modeldisp="EX-Z16"; }
  else if ($("body.exh20g").length>0) { model="exh20g"; modeldisp="EX-H20G"; }
  

	/* ANSWERBOX DOMReady */
    $("#answerbox").ready(function () {
      $("#questions h3").click(function() {
        var icon = $(this).closest("li").find(".icon img");
        var content = $(this).closest("li").find(".content");
        if ( $(this).hasClass("expanded") ) {
          icon.attr("src",icon.attr("src").replace("_opened","_closed"));
          icon.attr("alt","Open");
          $(this).toggleClass("expanded");
          content.hide("slow");
        } else {
          icon.attr("src",icon.attr("src").replace("_closed","_opened"));
          icon.attr("alt","Close");
          $(this).toggleClass("expanded");
          content.show("slow");
        }
      });
      
      $("#ab_askbtn").live("click",function() {
        var text = $(this).find("textarea").text();
        text = text.substring(0,text.indexOf(" t")-1);
        loadiFrame(text);
      });
      
      $("#questions .ab_answerbtn").live("click",function() {
        var text = $(this).find("textarea").text();
        text = text.substring(0,text.indexOf(" t")-1);
        loadiFrame(text);
      });
      
      $("#changemodel").attr("src","images/answerbox/answerbox_"+model+"_title.png");
      
    });
    // end answerbox
  
  // tabs on product page
  $("#body_tabbedbox .tabs_content").each(function() {
    //$(this).height(($(this).height()>320)?$(this).height():320).css("overflow","hidden");
  });
  
  var $producttabs = $("#body_tabbedbox").tabs({
    show: function(e, ui) {
      $("#body_tabbedbox .tabs_prepend").each(function() {
        if ($(this).find(".features_flashcopy_wrap").length==0) {
          $("#tabs_main .features_flashcopy_wrap").clone().prependTo($(this));
          $(this).find(".fc_featurelist").hide();
        }
      });
      $("#body_tabbedbox .ui-state-active").each( function() {
        var $curimg = $(this).find("img");
        $("#body_tabbedbox .ui-state-default img").each(function() {
          $(this).attr("src",$(this).attr("src").replace("_on","_off"));
        });
        $curimg.attr("src",$curimg.attr("src").replace("_off","_on"));
      });
      $("#body_tabbedbox_wrap").height($(ui.panel).height()+25);
      if (model == "exh10") {
	if (ui.index == 2) {
	  $("#techspecs_footnote").show();
	}
	else {
	  $("#techspecs_footnote").hide();
	}
      }
    }
  });
  
  var $newstabs = $("#news_tabbedbox").tabs({
    show: function(e, ui) {
      $("#news_tabbedbox .ui-state-active").each( function() {
        var $curimg = $(this).find("img");
        $("#news_tabbedbox .ui-state-default img").each(function() {
          $(this).attr("src",$(this).attr("src").replace("_on","_off"));
        });
        $curimg.attr("src",$curimg.attr("src").replace("_off","_on"));
      });
      $("#news_tabbedbox_wrap").height($(ui.panel).height()+25);
    }
  });
  
  var newstab = $(document).getUrlParam("newstab");
  
 if (newstab=="2008") {
    $newstabs.tabs('select',0);
  } else if (newstab=="2009") {
    $newstabs.tabs('select',1);
  } else {
    $newstabs.tabs('select',2);
  }
  
  
  
  
  $("body.products").find(".MODEL").html(modeldisp);

  $("#btn_share_menu").hover(
    function() {
    },
    function() {
      $(this).hide("slow");
      $("#btn_share").show();
    }
  );
    
  $("#btn_share").click(function() {
    var $sharebtn = $(this);
    var $sharemenu = $("#btn_share_menu");
    $sharebtn.hide();
    $sharemenu.show("slow");
    
    
  });


    $("#btn_share_menu li.facebook").click(function() {
      var url = location.href;
      var title = document.title;
      window.open("http://www.facebook.com/share.php?t=" + title + "&u=" + url);
    });
  
    $("#btn_share_menu li.delicious").click(function() {
      var url = location.href;
      window.open("http://del.icio.us/post?url=" + url);
    });
  
    $("#btn_share_menu li.buzzup").click(function() {
      var url = location.href;
      window.open("http://buzz.yahoo.com/submit/?submitUrl=" + url);;
    });
    
    
  // Where To Buy functions
  $("#bd_input input").focus(function() {
    $("#bd_input input").css({"border-color":"#7f9db9"});
    $("#bd_input input").css({"border-width":"1px"});
    $("#bd_input input").css({"border-style":"solid"});    
    $("#bd_input input").css({"color":"black"});
  });  
  
  $("#bd_input input").mouseover(function() {
    if ($(this).attr("value")=="Zip") { $(this).attr("value",""); }
  });
  
  $("#bd_input input").mouseout(function() {
    if ($(this).attr("value")=="") { $(this).attr("value",""); }
  });
  
  $("#bd_input input").blur(function() {
    if ($(this).attr("value")=="") { $(this).attr("value","Zip"); }
  });
  
  $("#btn_mapit").click(function() {
    if (!isValidZipCode($("#bd_input input").attr("value"))) {
        $("#bd_input input").css({"border":"1px solid #f00"});
        $("#bd_input input").css({"color":"red"});
        } else {  
        $("#btn_offline img").attr("src",$("#btn_offline img").attr("src").replace("e_off","e_on"));
        $("#btn_online img").attr("src",$("#btn_online img").attr("src").replace("e_on","e_off"));
        executeSearch();
        }
  });
  
  $("#btn_online img").click(function() {
    $(this).attr("src",$(this).attr("src").replace("e_off","e_on"));
    $("#btn_offline img").attr("src",$("#btn_offline img").attr("src").replace("e_on","e_off"));
    executeSearch();
  });
  
  $("#btn_offline img").click(function() {
    $(this).attr("src",$(this).attr("src").replace("e_off","e_on"));
    $("#btn_online img").attr("src",$("#btn_online img").attr("src").replace("e_on","e_off"));
    executeSearch();
  });

  /*** click buy from products page, changes result_for content ***/
   var param = $(document).getUrlParam("model");
   //alert (param);
    if (param) {
    clearAllModels();
        var resultsimg = "<img src=\"\/resource\/old\/images\/resultsimg.png\" alt=\"Results For:\" style=\"margin-right:5px;\"/>";
        var model = resultsimg+ param;
        //alert (model);
        $("#results_for").html(model);

        }else {
        //alert ("not found in url");
  };

  $("#bs_camera ul li img").click(function() {
      var $self = $(this);
      var selfsrc = $self.attr("src");
      var resultsimg = "<img src=\"\/resource\/old\/images\/resultsimg.png\" alt=\"Results For:\" style=\"margin-right:5px;\"/>";
      if($self.attr("alt").search("EX") > -1)
      {
        var model = resultsimg+ "EX" + "-" + $self.attr("alt").split("EX")[1];
      }
      else
      {
      	var model = resultsimg+ $self.attr("alt");
      }
        if (selfsrc.indexOf("_off")>-1) {
          clearAllModels();
          $self.attr("src",selfsrc.replace("_off","_on"));

/* Andrei opensuite [BEGIN] */
		  var str  = "#" + $self.attr('alt');
		  if ($("#bs_camera ul li div").hasClass("bold"))
		  {
			$("#bs_camera ul li div").removeClass("bold");
			$(str).addClass("bold");
		  }
		  else{
			$(str).addClass("bold");
		  }
/* Andrei opensuite [END] */
		  
          $("#results_for").html(model);
        } else {
          if (howManySelected()>1) {
            clearAllModels();
            $self.attr("src",selfsrc.replace("_on","_off"));
          }
        }
      //  alert('here');
       
  /*
    
    
   */ 
    executeSearch();
   
  });
  /* Andrei opensuite [BEGIN] */
  $("#bs_camera ul li div").click(function() {
		var im_id = "i" + $(this).attr("id");
		var $self = $("img[id='" + im_id + "']");

      var selfsrc = $self.attr("src");
      var resultsimg = "<img src=\"\/resource\/old\/images\/resultsimg.png\" alt=\"Results For:\" style=\"margin-right:5px;\"/>";
        var model = resultsimg+ "EX" + "-" + $self.attr("alt").split("EX")[1];
        if (selfsrc.indexOf("_off")>-1) {
          clearAllModels();
          $self.attr("src",selfsrc.replace("_off","_on"));


		  var str  = "#" + $self.attr('alt');
		  if ($("#bs_camera ul li div").hasClass("bold"))
		  {
			$("#bs_camera ul li div").removeClass("bold");
			$(str).addClass("bold");
		  }
		  else{
			$(str).addClass("bold");
		  }

		  
          $("#results_for").html(model);
        } else {
          if (howManySelected()>1) {
            clearAllModels();
            $self.attr("src",selfsrc.replace("_on","_off"));
          }
        }
      //  alert('here');

    executeSearch();
   
	});
/* Andrei opensuite [END] */
  
  
  $("body.products").each(function() { // deep linking for product pages
    var tab = $(document).getUrlParam("tab");
    switch (tab) {
      case "overview":
        $producttabs.tabs('select',0);
        window.scroll(0,500);
        break;
      case "features":
        $producttabs.tabs('select',1);
        window.scroll(0,500);
        break;
      case "operation":
        $producttabs.tabs('select',2);
        window.scroll(0,500);
        break;
      case "techspecs":
        $producttabs.tabs('select',1);
        /*if ($("#body_tabbedbox li.tabitem").length==3) {
          $producttabs.tabs('select',2);
        } else {
          $producttabs.tabs('select',3);
        }*/
        window.scroll(0,600);
        break
      default:
    }
  });
  
  $("body#buy").each(function() {
    
    var deepLinkModel = $(document).getUrlParam("model");
    var deepLinkShop = $(document).getUrlParam("shop");
    var deepLinkZip = $(document).getUrlParam("zip");
    var deepLinkRadius = $(document).getUrlParam("radius");
    
    if ((deepLinkShop=="online") || ((deepLinkShop==""))) {
      if (isValidModel(deepLinkModel)) {
        clearAllModels();
        toggleModel(deepLinkModel);
        executeSearch();
      } // if valid model
    } else if (deepLinkShop=="offline") {
      if (isValidModel(deepLinkModel)) {
        clearAllModels();
        if ((deepLinkZip==null) || (deepLinkZip=="") || (parseInt(deepLinkZip)=="NaN") || (deepLinkZip=="NaN")) { deepLinkZip="10018"; }
        if ((deepLinkRadius==null) || (deepLinkRadius=="") || (parseInt(deepLinkRadius)=="NaN")) { deepLinkRadius="5"; }
        
        $("#bd_input input").attr("value",deepLinkZip);
        $("#bd_select select").val(deepLinkRadius);
        toggleModel(deepLinkModel);
        $("#btn_offline img").attr("src",$("#btn_offline img").attr("src").replace("e_off","e_on"));
        $("#btn_online img").attr("src",$("#btn_online img").attr("src").replace("e_on","e_off"));
        executeSearch();
      }
    }
    executeSearch();
    
  });
  /** sellpoint techspecs page **/
   $("#sellpoint_techspecs_main .sellpoint_techspecs_row:odd").addClass("unshaded_row");
   $("#sellpoint_techspecs_main .sellpoint_techspecs_row:even").addClass("shaded_row");
   
  /*** Product Detail Page ***/

  
  $("#tabs_techspecs .techspecs_row:even").addClass("shaded_row");
  
  $("#findastore_btn").click(function() {
    //var zip = parseInt($("#findastore_zip input").attr("value"));
    var zip = $("#findastore_zip input").attr("value");
    var model = $("#findastore_model").attr("value");
    if (isValidModel(model)) {
    //alert (zip);
      if (!isValidZipCode(zip)) {
         $("#findastore_zip input").css({"border":"1px solid #f00"});
         $("#findastore_zip input").css({"color":"red"});
         } else {
         window.location = "buy.shtml?model=" + model + "&shop=offline&radius=5&zip="+zip;
      }
    }
  });
  
  $("#findastore_zip input").focus(function() {
    $("#findastore_zip input").css({"border-color":"#7f9db9"});
    $("#findastore_zip input").css({"border-width":"1px"});
    $("#findastore_zip input").css({"border-style":"solid"});        
    $("#findastore_zip input").css({"color":"black"});
  });
  
  $("#findastore_zip input").mouseover(function() {
    if ($(this).attr("value")=="Zip") { $(this).attr("value",""); }
  });
  
  $("#findastore_zip input").mouseout(function() {
    if ($(this).attr("value")=="") { $(this).attr("value",""); }
  });
  
  $("#findastore_zip input").blur(function() {
    if ($(this).attr("value")=="") { $(this).attr("value","Zip"); }
  });
  
  $("#accd_productmatrix div.accdp_img").each(function() {
    //alert($(this).innerWidth());
    var mywidth = $(this).find("img").get(0).clientWidth;
    $(this).width(mywidth);
  });
  
  $("#acc_detail_box").each(function() {
    var $products  = $("#accd_productmatrix li");
    var numofprods = $products.length;
    var $pager = $(this).find(".accd_pager");
    var numofpagers = $pager.length;
    $pager.ul = $pager.find("ul");
    var ipp = 9; // items per page
    var lastpage = Math.ceil(numofprods/ipp);
    
    
    $pager.ul.append('<li class="prev disabled"><a href="#">Previous</a></li>');
    $pager.ul.append('<li>&#60;</li>');
    $pager.ul.append('<li class="link current"><a href="#">1</a></li>');
    for (var a=2; a<=lastpage; a++) {
      $pager.ul.append('<li class="link"><a href="#">' + a + '</a></li>');
    }
    $pager.ul.append('<li>&#62;</li>');
    $pager.ul.append('<li class="next"><a href="#">Next</a></li>');
    
    $pager.prev = $pager.find(".prev");
    $pager.next = $pager.find(".next");
    $pager.list = $pager.find(".link");
    
    function changepage(page) {
      var $curpage = $pager.find(".current");
      var curpage = parseInt($pager.find(".current").eq(0).text());
      var pagestart = ipp*(page-1) + 1;
      var pageend = pagestart+ipp;
      if (page<2) {
        $products.slice(ipp).hide();
        $products.slice(0,ipp-1).show();
        $curpage.removeClass("current");
        $curpage.html('<a href="#">' + curpage + '</a>');
        for (var b=0; b<numofpagers; b++) {
          $pager.list.eq(b*lastpage).addClass("current");
        }
        $pager.prev.addClass("disabled");
        if (page==lastpage) { $pager.next.addClass("disabled"); }
        else { $pager.next.removeClass("disabled"); }
      } else {
        $products.slice(0,pagestart-1).hide();
        $products.slice(pageend).hide();
        $products.slice(pagestart-1,pageend-1).show();
        $curpage.removeClass("current");
        $curpage.html('<a href="#">' + curpage + '</a>');
        for (var b=0; b<numofpagers; b++) {
          $pager.list.eq((b*lastpage)+(page-1)).addClass("current");
        }
        $pager.prev.removeClass("disabled");
        if (page==lastpage) { $pager.next.addClass("disabled"); }
        else { $pager.next.removeClass("disabled"); }
      }
      
    }
    
    $pager.prev.click(function () {
      var $curpage = $pager.find(".current").eq(0);
      var curpage = parseInt($curpage.text());
      if (curpage>1) {
        changepage(curpage-1);
      }
    });
    
    $pager.next.click(function () {
      var $curpage = $pager.find(".current").eq(0);
      var curpage = parseInt($curpage.text());
      //alert(curpage + "<" + lastpage);
      if (curpage<lastpage) {
        changepage(curpage+1);
      }
    });
    //$("#acc_detail_box .accd_pager").html($pager.html());
  });
  
  $("#accd_headerbar li img").each(function() {
    var imgsrc = $(this).attr("src");
    if (imgsrc.indexOf( $("body").attr("class") )==-1) {
      $(this).attr("src",imgsrc.replace("_on","_off"));
    } else {
      $(this).attr("src",imgsrc.replace("_off","_on"));
    }
  });
  
  $("#static_body .content").hide();
  
  $("#static_body div:first").each(function() {
    var $img = $(this).find("h3 img");
    $img.attr("src",$img.attr("src").replace("_expand","_contract"));
    $(this).find(".content").show();
  });
  
  $("#static_body div").each(function() {
    var $parent = $(this);
    $parent.find("h3 img").click(function() {
      var imgsrc = $(this).attr("src");
      if (imgsrc.indexOf("_expand")>-1) {
        //if ($.browser.msie && $.browser.version.substr(0,1)<7) $parent.find(".content").show(); else 
        $parent.find(".content").show("slow"); 
        $(this).attr("src",$(this).attr("src").replace("_expand","_contract"));
      } else {
        //if ($.browser.msie && $.browser.version.substr(0,1)<7) $parent.find(".content").hide(); else 
        $parent.find(".content").hide("slow");
        $(this).attr("src",$(this).attr("src").replace("_contract","_expand"));
      }
    });
  });
  
  // support page
  
  $("#support_email").click(function() {
    var $emailWindow = $("emailFlash");
  
    $emailWindow.show();
    if (expSwf=="") { mySwf = "share.swf"; } else { mySwf = expSwf; }
    $emailWindow.flash({
      swf: mySwf,
      width: 651,
      height: 370,
      hasVersion: 10,
      expressInstaller: 'expressInstall.swf',
      wmode: 'transparent',
      params: {
        wmode: 'transparent'
      },
	    flashvars: {
        hideToBox: 'true',
        section: 'support',
        shareURL: 'share.php'
      }
    });
  });
  
  // Flash movies
  
  var deepLinkModel = $(document).getUrlParam("model");
  var deepLinkSection = $(document).getUrlParam("section");
  var deepLinkFeature = $(document).getUrlParam("feature");
  var deepLinkId = $(document).getUrlParam("id");
  var skipHome=0;
  
  $("body.home").each(function() {
    if (deepLinkSection!="") {
      if (deepLinkSection == "commercial1") {
        $("body#explore #body_featurestage").width(663);
        
        if (expSwf=="") { mySwf = "commercial_player.swf"; } else { mySwf = expSwf; }
        $("body#explore #body_featurestage").flash({
          swf: mySwf,
          width: '663',
          height: '497',
          hasVersion: 10,
          expressInstaller: 'expressInstall.swf',
          wmode: 'transparent',
          allowScriptAccess: 'always',
          allowFullScreen: 'true',
          params: {
            wmode: 'transparent',
            allowScriptAccess: 'always',
            allowFullScreen: 'true'
          },
          flashvars: {
            flvUrl: 'Flash/_assets/flv/FH20_commercial.flv',
            section: 'commercial1',
      playerURL: "flv_player_g.swf"
          }
        });
        skipHome=1;
      } else if (deepLinkSection == "commercial2") {
        $("body#explore #body_featurestage").width(663);
        
        if (expSwf=="") { mySwf = "commercial_player.swf"; } else { mySwf = expSwf; }
        $("body#explore #body_featurestage").flash({
          swf: mySwf,
          width: '663',
          height: '497',
          hasVersion: 10,
          expressInstaller: 'expressInstall.swf',
          wmode: 'transparent',
          allowScriptAccess: 'always',
          allowFullScreen: 'true',
          params: {
            wmode: 'transparent',
            allowScriptAccess: 'always',
            allowFullScreen: 'true'
          },
          flashvars: {
            flvUrl: 'Flash/_assets/flv/DVD_DP3.flv',
            section: 'commercial2',
      playerURL: "flv_player_g.swf"
          }
        });
        skipHome=1;
      } else {
      }
    }
  });
  
  $("body.history").each(function() {
    if (deepLinkSection!="") {
      if (deepLinkSection == "commercial1") {
        $("body#explore #body_featurestage").width(663);
        
        if (expSwf=="") { mySwf = "commercial_player.swf"; } else { mySwf = expSwf; }
        $("body#explore #body_featurestage").flash({
          swf: mySwf,
          width: '663',
          height: '497',
          hasVersion: 10,
          expressInstaller: 'expressInstall.swf',
          wmode: 'transparent',
          allowScriptAccess: 'always',
          allowFullScreen: 'true',
          params: {
            wmode: 'transparent',
            allowScriptAccess: 'always',
            allowFullScreen: 'true'
          },
          flashvars: {
            flvUrl: 'Flash/_assets/flv/FH20_commercial.flv',
            section: 'commercial1',
      playerURL: "flv_player_g.swf"
          }
        });
        skipHome=1;
      } else if (deepLinkSection == "commercial2") {
        $("body#explore #body_featurestage").width(663);
        
        if (expSwf=="") { mySwf = "commercial_player.swf"; } else { mySwf = expSwf; }
        $("body#explore #body_featurestage").flash({
          swf: mySwf,
          width: '663',
          height: '497',
          hasVersion: 10,
          expressInstaller: 'expressInstall.swf',
          wmode: 'transparent',
          allowScriptAccess: 'always',
          allowFullScreen: 'true',
          params: {
            wmode: 'transparent',
            allowScriptAccess: 'always',
            allowFullScreen: 'true'
          },
          flashvars: {
            flvUrl: 'Flash/_assets/flv/DVD_DP3.flv',
            section: 'commercial2',
      playerURL: "flv_player_g.swf"
          }
        });
        skipHome=1;
      } else {
      }
    }
  });  
  
  if ( $("body").attr("id")=="cameras" ) {
    skipHome=1;
    if ( (deepLinkSection==null) || (deepLinkSection=="") ) {
      deepLinkSection = "landing";
    }
  }
  
  if (expSwf=="") { mySwf = "lifestyle.swf"; } else { mySwf = expSwf; }
  $("body.cameras #body_featurestage").flash({
    swf: mySwf,
    width: 979,
    height: 477,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
	  flashvars: {
      section: deepLinkSection
    }
  });
  
  
  
  $("body#testcamera #body_featurestage").flash({
    swf: 'testcamera.swf',
    width: 979,
    height: 477,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
	  flashvars: {
      section: deepLinkSection
    }
  });
  
  if (skipHome==0) {  
    if (expSwf=="") { mySwf = "homePageNew.swf"; } else { mySwf = expSwf; }
    /*$("body.home #featurestage_left").flash({
      swf: mySwf,
      width: 675,
      height: 467,
      hasVersion: 10,
      expressInstaller: 'expressInstall.swf',
      wmode: 'transparent',
      align: 't',
      id: 'homePageNew',
      params: {
        wmode: 'transparent'
      },
	    flashvars: {
        section: deepLinkSection,
        xmlpath: "Flash/_assets/xml/home.xml"
      }
    });
    */
    var params  = {
	  scale: 'noScale',
	  menu: 'false',
	  allowFullScreen: 'true',
	  allowScriptAccess: 'always',
	  background: '0x000000',
	  salign: 't',
	  wmode:'transparent'
	};
	
	var flashvars = {
		xmlFile: "Flash/_assets/xml/home.xml"
	}
	
	var attribs = {
		name: "fs_flash",
		id: "fs_flash"
	}
	
	if ($("#fs_flash").length != 0)
	{
	    swfobject.embedSWF(mySwf, "fs_flash", "675", "467", "10.0.0","expressInstall.swf",flashvars,params,attribs);
	}

	/*if ($("#home_flash").length != 0)
	{
	    swfobject.embedSWF(mySwf, "home_flash", "979", "477", "10.0.0","expressInstall.swf",flashvars,params,attribs);
	}
	*/
  }
  /*
  $("#featurestage_right li").each(function ()
  {  
    $(this).hover(
        function () {
            _img = $(this).find("img");
	        _img.attr("src",_img.attr("src").replace("_off","_on"));
        },
        function () {
            _img = $(this).find("img");
	        _img.attr("src",_img.attr("src").replace("_on","_off"));
        }
    );
   });
  */
  
  if (expSwf=="") { mySwf = "history.swf"; } else { mySwf = expSwf; }
  $("body.history #body_featurestage").flash({
    swf: mySwf,
    width: 979,
    height: 477,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
   flashvars: {
        xmlFile: "Flash/_assets/xml/history.xml",
        closeURL: "index.shtml"     
    }
  });
/*
  $("body#features #body_featurestage").each(function() {
    swfobject.embedSWF("expressInstall.swf", "body_featurestage", "300", "120", "10.0.0", "expressInstall.swf");
  });
  */
  
  /*Tryx*/
  if (expSwf=="") { mySwf = "TryxSpin360.swf"; } else { mySwf = expSwf; }
  $("body.tryx #tryx-flash-content").flash({
    swf: mySwf,
    width: 484,
    height: 409,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
   flashvars: {
	xmlFile: "tryx_camera.xml"
    }
  });
  
  /*ZR10*/
  if (expSwf=="") { mySwf = "TryxSpin360.swf"; } else { mySwf = expSwf; }
  $("body.zr #exzr10-flash-content").flash({
    swf: mySwf,
    width: 484,
    height: 409,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
   flashvars: {
	xmlFile: "exzr10_camera.xml"
    }
  });
  
  /*ZR100*/
  if (expSwf=="") { mySwf = "TryxSpin360.swf"; } else { mySwf = expSwf; }
  $("body.tryx #exzr100-flash-content").flash({
    swf: mySwf,
    width: 484,
    height: 409,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
   flashvars: {
	xmlFile: "exzr100_camera.xml"
    }
  });

  if (expSwf=="") { mySwf = "features.swf"; } else { mySwf = expSwf; }
  $("body#features #body_featurestage").flash({
    swf: mySwf,
    width: 980,
    height: 546,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
    flashvars: {
      xmlFile: "Flash/_assets/xml/featurespage.xml",
      feature: deepLinkFeature,
      playerURL: "flv_player_g.swf"
    }  
  });
  


  if (expSwf=="") { mySwf = "config_nodrag.swf"; } else { mySwf = expSwf; }
  $("body#config #body_featurestage").flash({
    swf: mySwf,
    width: 986,
    height: 890,
    hasVersion: 10,
    name: "config",
    id: "config",
    wmode: 'opaque',
    params: {
      wmode: 'opaque'
    },
    expressInstaller: 'expressInstall.swf',
	  flashvars: {
      xmlpath: "Flash/_assets/xml/config.xml",      
      resized: "false"
    }  
  });
/*
  if (expSwf=="") { mySwf = "config2.swf"; } else { mySwf = expSwf; }
  $("body#config2 #body_featurestage").flash({
    swf: mySwf,
    width: 986,
    height: 1000,    
    name: "config",
    id: "config",
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
	  flashvars: {
      xmlpath: "Flash/_assets/xml/config.xml"
    }  
  });
  */
  if (expSwf=="") { mySwf = "gallery.swf"; } else { mySwf = expSwf; }
  $("body#image #body_featurestage").flash({
    swf: mySwf,
    width: 980,
    height: 496,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
	  flashvars: {
      xmlPath: "Flash/_assets/xml/",
      conf: "Flash/_assets/conf_gallery.js",
      section: deepLinkSection,
      id: deepLinkId,
      playerURL: "flv_player_g.swf"
    }  
  });
  
  

  if (expSwf=="") { mySwf = "support.swf"; } else { mySwf = expSwf; }
  $("body#support #body_featurestage").flash({
    swf: mySwf,
    width: 980,
    height: 460,
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
	flashvars: {
	  xmlFile: "Flash/_assets/xml/support.xml"
	},
      section: deepLinkSection
  });
  
  
  var xmlfile_inaction = "Flash/_assets/xml/ccarousel_" + model + ".xml";

  if (expSwf=="") { mySwf = "CCarousel.swf"; } else { mySwf = expSwf; }
  $('#body_inaction').flash({
    swf: mySwf,
    width: '980',
    height: '181',
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
    flashvars: {
      xmlFile: xmlfile_inaction
    }
  });
  
  
  var xmlfile_flash_view = "Flash/_assets/xml/cameras_view_" + model + ".xml"
  if (expSwf=="") { mySwf = "cameras_view.swf"; } else { mySwf = expSwf; }
  $('#body_tabbedbox .features_flash_view').flash({
    swf: mySwf,
    width: '377',
    height: '275',
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    flashvars: {
      xmlFile: xmlfile_flash_view
    }
  });
  
  if (expSwf=="") { mySwf = "accessories.swf"; } else { mySwf = expSwf; }
  $('#body_accessorize').flash({
    swf: mySwf,
    width: '980',
    height: '399',
    hasVersion: 10,
    expressInstaller: 'expressInstall.swf',
    wmode: 'transparent',
    params: {
      wmode: 'transparent'
    },
    flashvars: {
      xmlFile: "Flash/_assets/xml/accessories.xml"
    }
  });
  
  /* Removed by BA as per Bennett 6/28 */  

  /* $("body.home #body_home_calloutlist li:first").click(function() {
    if (expSwf=="") { mySwf = "commercial_player.swf"; } else { mySwf = expSwf; }
    $("body.home #body_featurestage").width(663);
    $("body.home #body_featurestage").flash({
      swf: mySwf,
      width: '663',
      height: '497',
      hasVersion: 10,
      expressInstaller: 'expressInstall.swf',
      wmode: 'transparent',
      allowScriptAccess: 'always',
      allowFullScreen: 'true',
      params: {
        wmode: 'transparent',
        allowScriptAccess: 'always',
        allowFullScreen: 'true'
      },
      flashvars: {
        flvUrl: 'Flash/_assets/flv/FH20_commercial.flv',
        section: 'commercial1',
      playerURL: "flv_player_g.swf"
      }
    });
  }); */
  
  /*
  $("body.home #body_home_calloutlist li:odd").click(function() {
    if (expSwf=="") { mySwf = "commercial_player.swf"; } else { mySwf = expSwf; }
    $("body.home #body_featurestage").width(663);
    $("body.home #body_featurestage").flash({
      swf: mySwf,
      width: '663',
      height: '497',
      hasVersion: 10,
      expressInstaller: 'expressInstall.swf',
      wmode: 'transparent',
      allowScriptAccess: 'always',
      allowFullScreen: 'true',
      params: {
        wmode: 'transparent',
        allowScriptAccess: 'always',
        allowFullScreen: 'true'
      },
      flashvars: {
        flvUrl: 'Flash/_assets/flv/DVD_DP3.flv',
        section: 'commercial2',
      playerURL: "flv_player_g.swf"
      }
    });
  });*/
 
 /* $("body.home #body_home_calloutlist li:last").click(function() {
    $("body.home #body_featurestage").width(663);
    $("body.home #body_featurestage").flash({
      swf: 'flv_player_g.swf',
      width: '663',
      height: '497',
      hasVersion: 10,
      expressInstaller: 'expressInstall.swf',
      wmode: 'transparent',
      allowScriptAccess: 'always',
      allowFullScreen: 'true',
      params: {
        wmode: 'transparent',
        allowScriptAccess: 'always',
        allowFullScreen: 'true'
      },
      flashvars: {
        flvUrl: 'Flash/_assets/flv/F1_commercial.flv',
        section: 'commercial3'
      }
    });
  });*/
  
  if (($.browser.msie) && ($.browser.version<7)) {
    $("#foot_linkbox ul li").css("text-indent","0px");
    $("#linkbox_col1 li").css("margin-right","0px");
    $("#linkbox_col2 li").css("width","auto");
    $("#linkbox_col1").css("left","6px");
    $("#linkbox_col2").css("left","397px");
    $("#linkbox_col3").css("left","686px");
    
  }
  
});

$(function() {		   
		  
		  $("#lastName_input").val("");
		  $("#firstName_input").val("");
		  $("#email_input").val("");
		  $("#termsCheckbox").attr("checked", false);
		  $("#errorMessage").html("");
		  
		  
		  
		  $("#submitButton").click(function()	
					{	
					
						var firstNameInput = $("#firstName_input").val();
						var lastNameInput = $("#lastName_input").val();
						var emailInput = $("#email_input").val();
						var checkBox = $("#termsCheckbox").is(":checked");
						
						if ((firstNameInput == "") || (lastNameInput == "") || (emailInput == ""))
						{
							$("#errorMessage").html("Please enter a name and a valid email.");
							return;
						}
						
						if (!checkBox)	{$("#errorMessage").html("Please check Terms and Conditions.");return;}
						
						
						var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i; 
            			 if (re.test(emailInput))  
            			 { 
							 $.get("AddAContact.php", {first_name:firstNameInput, last_name:lastNameInput, email_address:emailInput, required_params:"email_address"}, function(data) {

														var commaIndex = data.indexOf(",");
														var successData = data.substring(0, (commaIndex));
														
														if (successData == "Success=true")
														 {
															$('#submitButton').unbind('click'); 
															 $("#submitButton").css("cursor", "auto");
															 $("#panelThankYou").show();
															 $("#panelHolder").hide();
															 $("#details").html("");
															 $("#errorMessage").html("");
															 

														 }
														 else
														 {
															 var error = data.substring((commaIndex + 1), data.length);
															 $("#errorMessage").html(error);
														 }
														 });
            			 } 
            			 else if (emailInput != "")  
            			 {     
                 			 $("#errorMessage").html("The email '"+ emailInput +"' is not valid, please enter a valid email.");
             			} 
         			 });
         			 
 
         			 
		   });
//$("#submitButton").click(function()	{alert()});


        			 
function resizeConfig(height) {

    $("body#config #body_featurestage").flash({
    swf: "config_nodrag.swf",
    width: 986,
    height: height,
    hasVersion: 10,
    name: "config",
    id: "config",
    wmode: 'opaque',
    params: {
      wmode: 'opaque'
    },
    expressInstaller: 'expressInstall.swf',
	  flashvars: {
      xmlpath: "Flash/_assets/xml/config.xml",
      resized: "true"
    }  
  });
  
 $("body#config_nodrag #body_featurestage").flash({
    swf: "config_nodrag.swf",
    width: 986,
    height: height,
    hasVersion: 10,
    name: "config",
    id: "config",
    wmode: 'opaque',
    params: {
      wmode: 'opaque'
    },
    expressInstaller: 'expressInstall.swf',
	  flashvars: {
      xmlpath: "Flash/_assets/xml/config.xml",
      resized: "true"
    }  
  });

}
 $(function () { 					
       $("body#config_nodrag #body_featurestage").flash({
            swf: "config_nodrag.swf",
            width: 986,
            height: 1000,
            hasVersion: 10,
            name: "config_nodrag",
            id: "config_nodrag",
            wmode: 'opaque',
            params: {
              wmode: 'opaque'
            },
            expressInstaller: 'expressInstall.swf',
	          flashvars: {
              xmlpath: "Flash/_assets/xml/config.xml",
              resized: "false"
            }  
      });
      
      $(".button").each(function() 
      {
        if ($(document).getUrlParam("section"))
        {
            if ($(this).attr("id") == $(document).getUrlParam("section"))
            {
                $(this).html("<img src='images/gallery_ads/button_on_halo.png' style='margin-top:-2px;'/>");
                $(this).addClass("on");
            }
            
        }
        
        $(this).click(function () {
            if (!$(this).hasClass("on")) 
            {
                $(this).html("<img src='images/gallery_ads/button_on_halo.png' style='margin-top:-2px;'/>");
                $(".on").each(function () {
                    $(this).removeClass("on");
                    $(this).html("");
                });
                
                $(this).addClass("on");
                reloadGallery($(this).attr("id"));
                  
            }
        });
        
        $(this).hover(
            function () {
                if (!$(this).hasClass("on")) 
                {
                    $(this).html("<img src='images/gallery_ads/button_on_halo.png' style='margin-top:-2px;'/>");
                }
            },
            function () {
                if (!$(this).hasClass("on"))
                {
                    $(this).html("");
                }
            }
       );
      }); // buttons
      
      $(".proshot").each(function () {
        $(this).click( function () {
            if (!$(this).hasClass("on")) 
            {
                $(".on").each(function () {
                    $(this).removeClass("on");
                    $(this).html("");
                });                
                reloadGallery($(this).attr("id"));                  
            }            
        });
      }); // proshot
      
      	
  }); // dom ready
  
function reloadGallery(section) 
{   
    $("body#image #body_featurestage").flash({
        swf: "gallery.swf",
        width: 980,
        height: 496,
        hasVersion: 10,
        expressInstaller: 'expressInstall.swf',
        wmode: 'transparent',
        params: {
          wmode: 'transparent'
        },
          flashvars: {
          xmlPath: "Flash/_assets/xml/",
          conf: "Flash/_assets/conf_gallery.js",
          section: section,
          playIntro: "false",
           playerURL: "flv_player_g.swf"
        }  
      });
}

function sendEmail()
{
	
}


$(function () 
{
    var params  = {
	  scale: 'noScale',
	  menu: 'false',
	  allowFullScreen: 'true',
	  allowScriptAccess: 'always',
	  background: '0x000000',
	  salign: 'tl',
	  wmode:'transparent'
	};

	var flashvars = {
		xmlFile: "Flash/_assets/xml/prod_header.xml"
	}
	
	var attribs = {
		name: "headerflash",
		id: "headerflash"
	}
	
	
	if ($("#bfh_flashcontent").length != 0) 
	{   
	    
	    swfobject.embedSWF("prodHeader.swf", "bfh_flashcontent", "980", "118", "9.0.0","expressInstall.swf",flashvars,params,attribs);
	    
	}
	
	

});


function loadiFrame(url) {
  $("#theiframe").html('<iframe name="formFrame" id="formFrame" style="width:975px; height:430px; overflow:hidden; border:none;" src="' + url + '"></iframe>').show();
}

$(function () 
{
    $("#tabbed_callout").click(function () 
    {
        document.location = "#answerbox";
    });
});