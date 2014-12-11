/**
 * @author SGC Agency
 * 
 */

 







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
			

			function ticker(container, delay){
			    if ($(container).length){
			        container = $(container)
			        var slides = container.length,
			            slide = 0
			        
			            setInterval(function(){
			                if (slide == slides -1) {
			                   container.slideDown()
			                   slide = 0
			            }else{
			                container.eq(slide).slideUp()
			                slide++
			            }
			
			            }, delay)
			                
			    }else{
			            return false;
			    }
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
					Cufon.refresh();

					

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
	ticker('#MainNewsTicker-Ticks ul li', 5000);
	gradients();
	joeyHover();

	
});	