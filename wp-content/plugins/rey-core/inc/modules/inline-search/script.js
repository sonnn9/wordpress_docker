!function(i){"use strict";var s={isOpen:!1,init:function(e){this.$searchblock=e,this.$searchInput=i('input[type="search"]',this.$searchblock),this.$searchInput.length&&(this.positionOnMobiles(),this.events())},events:function(){var s=this;this.$searchInput.on("focus",function(e){i.reyHelpers.is_global_section_mode||s.isOpen||s.open()}),i(document).on("rey/close_panels",function(e,n){"search-inline"!==n&&s.isOpen&&s.close()}),i(".rey-searchPanel__suggestions button",this.$searchblock).on("click",function(e){e.preventDefault(),s.$searchInput.val(i(this).text()),s.$searchInput.trigger("change")}),i(".rey-headerSearch-toggle",this.$searchblock).on("click",function(e){e.preventDefault(),s.isOpen||(s.open(),s.$searchInput.trigger("focus"))}),i(".rey-inlineSearch-mobileClose",this.$searchblock).on("click",function(e){e.preventDefault(),s.isOpen&&s.close()})},positionOnMobiles:function(){var n=this,s=i(".rey-inlineSearch-wrapper",this.$searchblock),e=function(){var e=n.$searchblock.offset().left;s.css("left","calc( -1 * ( "+e+"px - 10vw ) )")};e(),i(window).on("resize",i.reyHelpers.debounce(function(){e()},300))},open:function(){this.isOpen=!0,i(document).trigger("rey/close_panels",["search-inline"]),i.reyHelpers.overlay("header","open",!0),i("body").addClass("search-inline--active")},close:function(){this.isOpen=!1,i("body").removeClass("search-inline--active"),i.reyHelpers.overlay("header","close"),this.$searchInput.blur()}};i(document).ready(function(){i(".rey-headerSearch--inline").each(function(e,n){Object.create(s).init(i(n))})})}(jQuery);