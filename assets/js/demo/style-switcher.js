/*
 * The lBole licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {
    
    /* ======= DEMO THEME CONFIG ====== */
	$('#config-trigger').click(function(e){
    	
		e.preventDefault();
		
		//$("#config-panel").toggleClass('config-panel-open');
		
		if($(this).hasClass('config-panel-open')){
          $("#config-panel").animate({
            right: "-=190" //same as the panel width
           }, 500);
          $(this).removeClass('config-panel-open').addClass('config-panel-hide');
         }
         else {      
         $("#config-panel").animate({
           right: "+=190" //same as the panel width
           }, 500);
          $(this).removeClass('config-panel-hide').addClass('config-panel-open');    
         }
	});
    
    $('#config-close').on('click', function(e) {
        e.preventDefault();
        $('#config-trigger').click();
    });
    
    
    $('#color-options a').on('click', function(e) { 
        var $styleSheet = $(this).attr('data-style');
        
		$('#theme-style').attr('href', $styleSheet);
				
		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');
		
		e.preventDefault();
		
		
	});


});