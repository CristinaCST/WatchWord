jQuery(document).ready(function($){if($('body').hasClass('page-id-15')){$('a').on('click',function(e){var linkUrl=$(this).attr('href');if(linkUrl&&linkUrl.indexOf('/member/')!==-1){e.preventDefault();$.ajax({url:linkUrl,type:'GET',success:function(response){var postContent=$(response).find('.team-bio').html();if(postContent){$('#modal-body').html(postContent);$('#global-modal').fadeIn();}else{alert('Failed to load content.');}},error:function(){alert('Failed to load content.');},});}});$('.close-modal').on('click',function(){$('#global-modal').fadeOut();});$(window).on('click',function(e){if($(e.target).is('#global-modal')){$('#global-modal').fadeOut();}});}
jQuery(document).ready(function($){if($('body').hasClass('single-projects')){if($('#trailer-modal').length===0){$('body').append(`
             <div id="trailer-modal" class="modal">
            <div class="modal-content">
                <video id="trailer-video" controls controlsList="nodownload" oncontextmenu="return false;">
                    <source id="trailer-video-src" src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <button class="trailer-modal-close">&times;</button>
            </div>
        </div>
            `);}
$('#trailer-modal').hide();$('.watch-trailer-link').on('click',function(e){e.preventDefault();const trailerUrl=$(this).attr('href');if(trailerUrl){$('#trailer-video-src').attr('src',trailerUrl);const video=document.getElementById('trailer-video');video.load();video.play();$('#trailer-modal').css('display','flex');}else{console.error('No trailer URL provided.');}});$('#trailer-modal .trailer-modal-close, #trailer-modal').on('click',function(e){if($(e.target).is('#trailer-modal')||$(e.target).is('.trailer-modal-close')){$('#trailer-modal').fadeOut();const video=document.getElementById('trailer-video');video.pause();video.currentTime=0;$('#trailer-video-src').attr('src','');}});}});});