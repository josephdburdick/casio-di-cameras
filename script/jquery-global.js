/**
 * @author SGC Agency
 * 
 */

 




			function horizontalScrollInterface(){
				//Calculate width of pager. Each LI = 142x112.
				$('ul#main-features-nav').css('width', 142 * $('ul#main-features-nav li').length);
				$('ul#main-features-nav').css('margin-left', 'auto').css('margin-right','auto');
				if ((navigator.userAgent.match(/msie/i)) || 
		        (navigator.userAgent.match(/ie/i))){
				//RUNNING IE, do not load scroller
				}
				else {
					$('div#scrollPager').jScrollPane({

						horizontalDragMinWidth: 25,
						horizontalDragMaxWidth: 25,
						autoReinitialise: true	
					});
				}
				
				
				//Calculate width of each Feature Detail otherCamera . Each LI = 150+2 x 125.
				var otherCameraULwidth = 152 * $('ul#main-features-otherCameraBuckets li').length;
				$('ul#main-features-otherCameraBuckets').css('width', otherCameraULwidth);
				$('ul#main-features-otherCameraBuckets').css('margin-left', 'auto').css('margin-right','auto');

				
				$('div#main-features-otherCameras-container').jScrollPane(
					{

						horizontalDragMinWidth: 25,
						horizontalDragMaxWidth: 25,
						autoReinitialise: true	
					});
				
				
				//Features Pager Thumb Caption hide/show
				$('ul#main-features-nav li').hover(function(){
					$(this).not('.activeSlide').children('div').addClass('inactiveSlide');
					$(this).children('div').stop(true, false).delay(200).animate({bottom: '1px'}, 300, 'easeInOutQuint');
				}, function(){
					$(this).not('.activeSlide').children('div').stop(true, false).animate({bottom: '-50px'}, 150, 'easeInOutQuint');
				});
				
				$('ul#main-features-nav li').click(function(){
					$('ul#main-features-nav li').not('.activeSlide').children('div').stop(true, false).animate({bottom: '-50px'}, 300, 'easeInOutQuint');

					$(this).children('div').addClass('activeSlide').removeClass('inactiveSlide');

				},function(){
					//$(this).children('div').addClass('inactiveSlide').removeClass('activeSlide');
				});
				
				
			
			
			}

			function featuresSlideshow(){
				
				/*setInterval(function(){
						$('.jspDrag').fadeTo(1000, .65);
						$('.jspDrag').fadeTo(1000, 1);
					
					},2000);*/
				
				
				$('#main-features-upfront').before('<div id="scrollPager"><ul id="main-features-nav"></ul></div>').cycle({
					
					startingSlide: 3,
				    timeout: 0, 
					fx: 'blindX',
					sync: 1,
					speed:800,
					easing: 'easeInOutQuart',
					pager: '#main-features-nav',
					pagerAnchorBuilder: function(idx, slide) {

						var src = $('img',slide).attr('src');
						var thumbcaption = $('img.features-slide-txt', slide).attr('alt'); 
						return '<li class="id' + idx + '"><a href="#"><img src="' + src + '" width="50" height="50" /></a><div class="main-features-pager-thumbCaption"><p><a href="#">' + thumbcaption + '</a></p></div></li>'; 
						
					}
					/*onPagerEvent: function(id) {
					
						console.log('centerid: ' + id);
					
					}*/
					
					
				});
		
				$('#main-features-leftbehind').cycle({
					startingSlide: 2,
					fx: 'scrollLeft',
				    timeout: 0, 
					speed:800,
					easing: 'easeInOutQuart',
					activePagerClass: '',
					//pager:  '#main-features-nav',
					pagerAnchorBuilder: function(idx, slide) { 
						
						// Return an existing button, instead of creating a new one
						var lastID = $('#main-features-nav').children().length - 1;
						var id = idx + 1;
						if (id > lastID) var id = 0;
						return $('#main-features-nav li.id' + id);
						
					}

				});
				$('#main-features-rightbehind').cycle({
					startingSlide: 4,
				    timeout: 0, 
					fx: 'scrollLeft',
  				    speed:   800,
					//pager:  '#main-features-nav',
					activePagerClass: '',
					easing: 'easeInOutQuart',
					pagerAnchorBuilder: function(idx, slide) { 

						// Return an existing button, instead of creating a new one
						var lastID = $('#main-features-nav').children().length - 1;
						var id = idx - 1;
						if (id < 0) var id = lastID;
						return $('#main-features-nav li.id' + id);
						
					}
				});

				$('#main-features-detail-MainImage ul').after('<ul id="main-features-detail-controller"><li class="buttonClick prev-controller"><a href="#"><span class="main-features-controller-previous"></span></a></li><li id="main-features-detail-count"></li><li class="buttonClick next-controller"><a href="#"><span class="main-features-controller-next"></span></a></li></ul>').cycle({
					next: 'li.next-controller',
					prev: 'li.prev-controller',
					timeout: 0,
					speed:800,
					sync:1,
					after: getslideNumber,
					fx: 'fade'

				});
				
				function getslideNumber(curr,next,opts){
					var caption = '' + (opts.currSlide + 1) + ' / ' + opts.slideCount;
					$('#main-features-detail-count').html(caption);
				}
				
				
				
			}

			function browserFix(){
				
			 if ((navigator.userAgent.match(/opera/i))){
			 	//RUNNING OPERA
					$('ul#main-support-feature-list li').css('marginLeft', '15px');
					//$('#header-NavMenu ul li').css('lineHeight', '47px');
				}
				else if((navigator.userAgent.match(/msie/i)) || 
		        (navigator.userAgent.match(/ie/i))){
					$('li#nav-brandingDI').css('top', '5px');
					$('div.hover-reflect').css('top', '10px');
				}
				else {
					
				}	
				
			}
			
			function joeyHover(){
			 if((navigator.userAgent.match(/msie/i)) || 
		        (navigator.userAgent.match(/ie/i)))
		        { 
		        //RUNNING IE, OPACITY CHANGES ON PNG FILES
				//$('ul#main-support-hover li div.hover-shadow').css({marginBottom: '-18px'});
			   $('li.joey-hover, #main-support-feature-list li').hover(function(){
					
					var shadowImg = $(this).children('div.hover-item').children('div.hover-shadow')//.find('img.shadow');
					var reflectImg = $(this).children('div.hover-item').children('div.hover-reflect')//.find('img.reflect');
					var itemImg = $(this).children('div.hover-item').find('img.item');
					
					$(itemImg).stop(true, false).delay(200).animate({top: '-20px'}, 600, 'easeInOutQuint');
					$(reflectImg).stop(true, false).delay(200).animate({top: '20px'}, 600, 'easeInOutQuint');

				}, function(){
					$(this).children('div.hover-item').find('img.item').stop(true, false).animate({top: '0px'}, 800, 'easeInOutBack');
					$(this).children('div.hover-item').children('div.hover-reflect').stop(true, false).animate({top: '10px'}, 800, 'easeInOutBack');

				});
				
				$('#main-support-feature-list li').hover(function(){
			
					var itemHover = $(this).children('a').attr('id').replace('link', '#main-support-hover li#hover');

					var shadowImg = $(itemHover).children('div.hover-item').children('div.hover-shadow')//.find('img.shadow');
					var reflectImg = $(itemHover).children('div.hover-item').children('div.hover-reflect')//.find('img.reflect');
					var itemImg = $(itemHover).children('div.hover-item').find('img.item');
					
					$(itemImg).stop(true, false).delay(200).animate({top: '-20px'}, 600, 'easeInOutQuint');
					$(reflectImg).stop(true, false).delay(200).animate({top: '20px'}, 600, 'easeInOutQuint');

				}, function(){
					var itemHover = $(this).children('a').attr('id').replace('link', '#main-support-hover li#hover');

					var shadowImg = $(itemHover).children('div.hover-item').children('div.hover-shadow')//.find('img.shadow');
					var reflectImg = $(itemHover).children('div.hover-item').children('div.hover-reflect')//.find('img.reflect');
					var itemImg = $(itemHover).children('div.hover-item').find('img.item');
					
					$(itemImg).stop(true, false).delay(200).animate({top: '0px'}, 600, 'easeInOutQuint');
					$(reflectImg).stop(true, false).delay(200).animate({top: '10px'}, 600, 'easeInOutQuint');
				
				});
				}
				else {
	 			//ALL OTHER BROWSERS
				$('li.joey-hover, #main-support-feature-list li').hover(function(){
					
					var shadowImg = $(this).children('div.hover-item').children('div.hover-shadow')//.find('img.shadow');
					var reflectImg = $(this).children('div.hover-item').children('div.hover-reflect')//.find('img.reflect');
					var itemImg = $(this).children('div.hover-item').find('img.item');
					
					$(itemImg).stop(true, false).delay(200).animate({top: '-20px'}, 600, 'easeInOutQuint');
					$(reflectImg).stop(true, false).delay(200).animate({top: '20px', opacity: '.20'}, 600, 'easeInOutQuint');
					$(shadowImg).stop(true, false).delay(200).animate({opacity: '.35'}, 600, 'easeInOutQuint');

				}, function(){
					$(this).children('div.hover-item').find('img.item').stop(true, false).animate({top: '0px'}, 800, 'easeInOutBack');
					$(this).children('div.hover-item').children('div.hover-reflect').stop(true, false).animate({top: '0px', opacity:'1'}, 800, 'easeInOutBack');
					$(this).children('div.hover-item').children('div.hover-shadow').stop(true, false).animate({opacity: '1'}, 800, 'easeInOutBack');

				});
				
				$('#main-support-feature-list li').hover(function(){
			
					var itemHover = $(this).children('a').attr('id').replace('link', '#main-support-hover li#hover');

					var shadowImg = $(itemHover).children('div.hover-item').children('div.hover-shadow')//.find('img.shadow');
					var reflectImg = $(itemHover).children('div.hover-item').children('div.hover-reflect')//.find('img.reflect');
					var itemImg = $(itemHover).children('div.hover-item').find('img.item');
					
					$(itemImg).stop(true, false).delay(200).animate({top: '-20px'}, 600, 'easeInOutQuint');
					$(reflectImg).stop(true, false).delay(200).animate({top: '20px', opacity: '.20'}, 600, 'easeInOutQuint');
					$(shadowImg).stop(true, false).delay(200).animate({opacity: '.35'}, 600, 'easeInOutQuint');

				}, function(){
					var itemHover = $(this).children('a').attr('id').replace('link', '#main-support-hover li#hover');

					var shadowImg = $(itemHover).children('div.hover-item').children('div.hover-shadow')//.find('img.shadow');
					var reflectImg = $(itemHover).children('div.hover-item').children('div.hover-reflect')//.find('img.reflect');
					var itemImg = $(itemHover).children('div.hover-item').find('img.item');
					
					$(itemImg).stop(true, false).delay(200).animate({top: '0px'}, 600, 'easeInOutQuint');
					$(reflectImg).stop(true, false).delay(200).animate({top: '0px', opacity: '1'}, 600, 'easeInOutQuint');
					$(shadowImg).stop(true, false).delay(200).animate({opacity: '1'}, 600, 'easeInOutQuint');
				
				});
 			}

			
				
			};
			function gradients(){
				$('#detail-FeatureSlideShow h1, .overview-Feature h3, div#landing-Feature-MainContent h1').prepend("<span></span>");

			};
			
			
	
			function cufon(){
				var univers_bold_links = ([
					'#header-NavMenu ul li a',
					//'li#dropDown-CameraTab',
					'li#MainNewsTicker-Ticks ul li a',
					'#landing-FeatureSlideShow-CameraBuckets ul li a',
					'#main-support-feature-list a',
					//'ul#main-support-buckets li ul.dark li a',
					'ul#main-features-otherCameraBuckets li a'
				]);
				var univers_black_links = ([
					//'li#MainNewsTicker-Ticks ul li a',
					'.body-MainBucket-LearnMore a',
					//'li#dropDown-CameraTab',
					//'li#dropDown-CameraTab a',
					'div.detail-Overview-SeeMore a',
					'div.support-Buckets-SeeMore a'
				]);
				var univers_white_links = ([
					'.main-features-band-learnmore a'
				]);
				var univers_regular = ([
					//'* p',
					//'#main-faq-Rightcol p',
					//'#header-TopLinks ul li',
					//'li#MainNewsTicker-Ticks ul li',
					'#detail-FeatureSlideShow-MainContent h2',
					//'#detail-FeatureSlideShow-MainContent p',
					//'#detail-FeatureSlideShow-MainContent ul li',
					'#detail-FeatureSlideShow-PriceBuyNow li',
					'#detail-mainTabs-tabs li',
					'ul#detail-mainTabs-tabs li.active',
					'#main-support-buckets ul li'
					
				]);
				var univers_bold = ([
					//'#footer-SiteMap > ul > li > ul > li a',
					//'li#MainNewsTicker-Ticks ul li a',
					//'#detail-FeatureSlideShow-MainContent h1',
					'div.overview-Feature h1',
					'div.overview-Feature h3',
					'div.overview-Feature h4',
					//'li.detail-FeatureSlideShow-BoldPrice',
					'#landing-Feature-MainContent h1',
					//'* b',
					'#main-support h3'
					//'ul#main-support-buckets li ul.dark li'

				]);
				var univers_black = ([
					//'#footer-Copyright', 
					//'div.container p',
					'li#MainNewsTicker-Badge',
					'ul.main-features-band li h3',
					'#main-faq h2'
				]);
				var houschkalt_heavy = ([
					'div#main-features-detail-main h2'
				]);

				// This helps Cufoned links display their hover colors successfully
				Cufon.replace(univers_bold_links, {
					fontFamily: 'Univers LT Bold',
					hover: {
						color: '#279bde'	
					}
				});
				Cufon.replace(univers_black_links, {
					fontFamily: 'Univers LT Black',
					hover: {
						color: '#1d75a7'	
					}
				});
				Cufon.replace(univers_white_links, {
					fontFamily: 'Univers LT Bold',
					hover: {
						color: '#ffffff'	
					}
				});
				Cufon.replace(univers_regular, {
					fontFamily: 'Univers LT Std',
					hover: true
				});
				Cufon.replace(univers_bold, {
					fontFamily: 'Univers LT Bold',
					hover: true
				});
				Cufon.replace(univers_black, {
					fontFamily: 'Univers LT Black',
					hover: true
				});
				Cufon.replace(houschkalt_heavy, {
					fontFamily: 'HouschkaAlt Heavy',
					hover: true
				});
				
				
				// We hide our Cufoned elements in our style sheets, and use this function to display them again
				$(univers_regular.toString()).css('visibility', 'visible');
				$(univers_bold.toString()).css('visibility', 'visible');
				$(univers_black.toString()).css('visibility', 'visible');
			};
			

			
			function ticker(){
				$('#MainNewsTicker-Ticks ul').cycle({ 
				    fx:      'scrollLeft', 
				    speed:    300, 
				    timeout:  5000,
					pause: 1 
				});
			};

			
			function interfaces(){
				//Make main-features-detail close button
				$('div.btn-close').hover(function(){
					$(this).stop(true,true).fadeTo(250, 1);
				},function(){
					$(this).stop(true,true).fadeTo(250, .65);
				});
				
				//Make images 'clickable'				
				$('.buttonClick').hover(function(){
					$(this).css('cursor','pointer');
				},function(){
					$(this).css('cursor','default');
				});
				$('.buttonClick').mousedown(function(){
					$(this).css('top','1px');
				});
				$('.buttonClick').mouseup(function(){
					$(this).css('top','0px');
				});
				
				
				//Detail-MainTabs toggle
				//$('ul#detail-mainTabs-tabs li').click(function(){
					//$('#detail-mainTabs-tabs li').removeClass('active');
					//$(this).addClass('active');
					//Cufon.refresh();
				//});
			
							
				//Global Navigation Camera DropDown 
				$('li#header-NavMenu-li-Cameras, ul#dropDown-Cameras').hover(function(){
					$('div#dropDown-Cameras ul').stop(true, true).fadeIn(150);
					$('li#dropDown-CameraTab a').css('color','#878787');
					//Cufon.refresh();

					

				}, function(){
					$('div#dropDown-Cameras ul').stop(true, true).fadeOut(150);
				});
				
				
				//Add arrow to active Thumb in Product Details Page
				if ($('ul.detail-FeatureSlideShow-Thumbs li').hasClass('active')){
					thumbActive = $('ul.detail-FeatureSlideShow-Thumbs li.active');
					$(thumbActive).prepend('<span></span>');
				};
				
				
				//Remove Arrow, Add Arrow to clicked item
				$('ul.detail-FeatureSlideShow-Thumbs li').children().click(function(){
					$('ul.detail-FeatureSlideShow-Thumbs li span').remove();
					$('ul.detail-FeatureSlideShow-Thumbs').children('li').removeClass('active');
					$(this).prepend('<span></span>').addClass('active');
					var $xlUrl = $(this).find('img').attr('src').replace('Thumb', 'Gallery');
				//Now trigger image change for Main Slideshow					
					$('ul.detail-FeatureSlideShow-MainImage li').find('img').attr('src', $xlUrl);

				});
				
		
								
				//Camera Detail-Overview-BigImage
				$('#overview-imageBucket-thumbs li').click(function(){
					$('#overview-imageBucket-thumbs li').removeClass('active');
					$(this).addClass('active');
					var $bucketUrl = $(this).find('img').attr('src').replace('thumb', 'xl').replace('jpg','png');
					$('ul#overview-imageBucket-bucket li').find('img').attr('src', $bucketUrl);
				});
				
				//Camera Landing - image buckets transparency
				$('div#landing-FeatureSlideShow-CameraBuckets ul li').hover(function(){
					$(this).addClass('active');
				}, function(){
					$(this).removeClass('active');
				});
				
				
			}

$(window).load(function(){
	browserFix();
	cufon();    
	interfaces();
	ticker();
	gradients();
	joeyHover();
	featuresSlideshow();
	horizontalScrollInterface();

	
});	