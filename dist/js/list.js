"use strict";require(["config"],function(){require(["jquery","template","load"],function(t,o){t.getJSON("/mock/list.json",function(e){var i={products:e.res_body.data},n=o("list_template",i);t(".buy").html(n),t(".add").on("click",function(){console.log(this)})})})});