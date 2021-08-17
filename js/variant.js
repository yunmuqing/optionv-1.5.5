ymq_define("Variant",["jquery","Config","Html"],(function(i,t,n){return class a{constructor(){var i=this;i.instance=null,i.htmlBuilder=n.getInstance(),i.config=t.getInstance(),i.addVariantIdInput().init()}initMemberVariables(){var i=this;i.variantJson={},i.variant_id=0,i.allVariantJson={},i.notAvailableVariantJson={},i.ymq_shopify_options_with_index_key={}}init(){this.initMemberVariables(),this.initVariantId().initNotAvailableVariantJson().initVariantJson()}initNotAvailableVariantJson(){var i=this;return i.config.product.variants.forEach((function(t){t.available||(i.notAvailableVariantJson[t.id]=t.options),i.allVariantJson[t.id]=t.options})),i}isSoldOut(){var t=this,n=[],a=[];return i(".ymq-shopify-option-box").each((function(t){"3"==i(this).data("type").toString()?(a.push(1),n.push(i(this).find("select").val().join(",").toString()),i(this).find("option").prop("disabled",!1)):(a.push(0),n.push(i(this).find("input:checked").val().toString()),i(this).find("input").prop("disabled",!1))})),n.forEach((function(o,e){var r=o,s=!1;t.ymq_shopify_options_with_index_key[e]&&t.ymq_shopify_options_with_index_key[e].forEach((function(o,l){o=t.config.util.reHtmlSpecialChars(o);var c=Object.assign([],n);if(o!=r&&(c[e]=o,Object.keys(t.notAvailableVariantJson).forEach((function(n){JSON.stringify(c)==JSON.stringify(t.notAvailableVariantJson[n])&&(1==a[e]?(i(`#ymq-attrib-ymq-variant-${e}`).find("option").eq(l).prop("disabled",!0),i(`#option-box-ymq-variant-${e} .ymq-multiple-ul li`).eq(l).data("title",t.config.ymq_option_branding.lan.sold_out)):i(`#ymq-attrib-ymq-variant-${e}-0`).parents(".ymq-shopify-option-box").find("input").eq(l).prop("disabled",!0).next().data("title",t.config.ymq_option_branding.lan.sold_out),s=!0)})),0==s)){var p=!1;try{Object.keys(t.allVariantJson).forEach((function(i){if(console.log(c,t.allVariantJson[i]),JSON.stringify(c)==JSON.stringify(t.allVariantJson[i]))throw p=!0,new Error("breakForEach")}))}catch(i){if("breakForEach"!=i.message)throw i}0==p&&(1==a[e]?(i(`#ymq-attrib-ymq-variant-${e}`).find("option").eq(l).prop("disabled",!0),i(`#option-box-ymq-variant-${e} .ymq-multiple-ul li`).eq(l).data("title",t.config.ymq_option_branding.lan.sold_out)):i(`#ymq-attrib-ymq-variant-${e}-0`).parents(".ymq-shopify-option-box").find("input").eq(l).prop("disabled",!0).next().data("title",t.config.ymq_option_branding.lan.sold_out))}}))})),i(".ymq-shopify-option-box select").each((function(n){t.htmlBuilder.initDropdown(i(`#ymq-attrib-ymq-variant-${n}`))})),t}initTypeVariantJson(i,t,n=null,a,o=null){var e=this,r={};return r.help=n?n.help:"",r.id=`ymq-variant-${t}`,r.label=i,r.options={},r.isShopify=!0,r.optionsIndex=t,r.required="",r.type=a,null!=o&&(r.style=o),r.tooltip=n?n.tooltip:"",r.tooltip_position=n?n.tooltip_position:"",r.alert_text=n&&n.hasOwnProperty("alert_text")?n.alert_text:"",r.a_t1=n&&n.hasOwnProperty("a_t1")?n.a_t1:"",r.a_t2=n&&n.hasOwnProperty("a_t2")?n.a_t2:"",r.a_width=n&&n.hasOwnProperty("a_width")?n.a_width:"",e.config.ymq_shopify_options[i].forEach((function(i,n){r.options[`${r.id}-${n}`]={id:`${r.id}-${n}`,one_time:0,price:0,price_type:"1",sku:"",value:i},e.config.util.variantIsSelect(e.config.variantData[e.variant_id].options[t],i)?r.options[`${r.id}-${n}`].default=1:r.options[`${r.id}-${n}`].default=""})),r}initDrodownVariantJson(i,t,n=null){return this.initTypeVariantJson(i,t,n,"3")}initRadioVariantJson(i,t,n=null){return this.initTypeVariantJson(i,t,n,"4",1)}initButtonVariantJson(i,t,n=null){return this.initTypeVariantJson(i,t,n,"15",2)}initCanvasVariantJson(i,t,n){var a=this,o={};return o.help=n.help,o.id=`ymq-variant-${t}`,o.label=i,o.options={},o.isShopify=!0,o.optionsIndex=t,o.style=1,o.required="",o.tooltip=n.tooltip,o.tooltip_position=n.tooltip_position,o.style=n.style,o.width=n.width,o.height=n.height,o.b_radius=n.b_radius,o.zoom=n.zoom,o.type="5",o.alert_text=n.hasOwnProperty("alert_text")?n.alert_text:"",o.a_t1=n.hasOwnProperty("a_t1")?n.a_t1:"",o.a_t2=n.hasOwnProperty("a_t2")?n.a_t2:"",o.a_width=n.hasOwnProperty("a_width")?n.a_width:"",a.config.ymq_shopify_options[i].forEach((function(i,e){o.options[`${o.id}-${e}`]={id:`${o.id}-${e}`,one_time:0,price:0,price_type:"1",sku:"",canvas1:n.values[e].canvas1,canvas2:n.values[e].canvas2,canvas_type:n.values[e].canvas_type,value:i},a.config.util.variantIsSelect(a.config.variantData[a.variant_id].options[t],i)?o.options[`${o.id}-${e}`].default=1:o.options[`${o.id}-${e}`].default=""})),o}initVariantJson(){var i=this;return console.log(i.config.ymq_variantjson,11111),i.config.ymq_has_only_default_variant||Object.keys(i.config.ymq_shopify_options).forEach((function(t,n){i.ymq_shopify_options_with_index_key[n]=i.config.ymq_shopify_options[t];var a="",o={};if(i.config.ymq_variantjson.hasOwnProperty(n)){var e=i.config.ymq_variantjson[n];a=e.type.toString()}else a=i.config.util.getValue(i.config.ymq_option_branding.extra,"init-variant-type",1).toString();switch(a){case"1":o=i.initDrodownVariantJson(t,n,e);break;case"2":o=i.initRadioVariantJson(t,n,e);break;case"3":o=i.initButtonVariantJson(t,n,e);break;case"4":o=i.initCanvasVariantJson(t,n,e);break;default:o=i.initDrodownVariantJson(t,n,e)}i.variantJson[o.id]=o})),i}buildVariantHtml(){var i=this;return i.config.ymq_has_only_default_variant||i.htmlBuilder.setJson(i.variantJson).buildtHtml(),i}initVariantId(){var i=this;if(i.variant_id=Number(i.config.util.getUrlParam("variant")),i.variant_id&&i.config.variantData.hasOwnProperty(i.variant_id)||(i.variant_id=Number(i.config.product.variants[0].id)),i.changeVariantId(),!i.config.variantData[i.variant_id].available)try{Object.keys(i.config.variantData).forEach((function(t){if(i.config.variantData[t].available)throw i.variant_id=Number(t),i.changeVariantId(),i.config.util.changeUriByVariantId(i.variant_id),new Error("LoopTerminates")}))}catch(i){if("LoopTerminates"!==i.message)throw i}return i}changeUriByVariantId(){var t=this,n=[],a={},o=[];t.config.hideByNow&&i(".shopify-payment-button").hide().remove(),i(".ymq-shopify-option-box").each((function(){var t=i(this).find(".ymq_lable").text();"3"==i(this).data("type").toString()?i(this).find(".ymq-shopify-option").each((function(){n.push(i(this).val().toString()),a[t]=i(this).val().toString(),o.push(i(this).val().toString())})):i(this).find(".ymq-shopify-option:checked").each((function(){n.push(i(this).val().toString()),a[t]=i(this).val().toString(),o.push(i(this).val().toString())}))}));var e=t.config.util.getValue(t.config.ymq_option_branding.extra,"trigger-select",""),r=t.config.util.getValue(t.config.ymq_option_branding.extra,"trigger-select-join","");return""!=e&&(i(e).val(o.join(r)).trigger("change"),t.config.util.jstrigger(i(e).get(0),"change")),Object.keys(a).forEach((function(n,o){var e=a[n];if(t.config.shopifySelectDom[n]&&"select"==t.config.shopifySelectDom[n].type){t.config.shopifySelectDom[n].jq.find("option").each((function(){i(this).val()==e?i(this).prop("selected",!0).trigger("click"):i(this).prop("selected",!1)})),t.config.shopifySelectDom[n].jq.val(e).trigger("change");var r=document.getElementById(t.config.shopifySelectDom[n].id);t.config.util.jstrigger(r,"change")}t.config.shopifySelectDom[n]&&"radio"==t.config.shopifySelectDom[n].type&&t.config.shopifySelectDom[n].jq.each((function(a){if(i(this).val()==e){i(this).prop("checked",!0).trigger("click");var o=document.getElementsByName(t.config.shopifySelectDom[n].name)[a];t.config.shopifySelectDom[n].jq.trigger("change"),t.config.util.jstrigger(o,"change")}else i(this).prop("checked",!1)}))})),t.config.product.variants.forEach((function(i){JSON.stringify(i.options)==JSON.stringify(n)&&(t.variant_id=Number(i.id),t.changeVariantId())})),t.config.util.changeUriByVariantId(t.variant_id),t}addVariantIdInput(){var t=this;if(!i(`#${t.config.ymq_variant_id}`).length){var n=`\n\t\t\t\t\t<input id="${t.config.ymq_variant_id}" type="hidden" value="">\n\t\t\t\t`;i(t.config.form_box).append(n)}return t}changeVariantId(){var t=this;i(`#${t.config.ymq_variant_id}`).val(t.variant_id),i(t.config.form_box).find("[name='id']").val(t.variant_id)}static getInstance(){return this.instance||(this.instance=new a),this.instance}}}));