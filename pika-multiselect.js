/** 
 *	@license PikaJS MultiSelect plugin 1.0
 *	© 2022 Scott Ogrin
 * 	MIT License
 */

 (function($) {

 	$.multiSelect = {
 		Version: '1.0',
 		defaults: {
      container: 'pms-container',
      pseudoSelect: 'pms-pseudo-select',
      selected: 'pms-selected',
      unselected: 'pms-unselected',
      disabled: 'pms-disabled',
      optgroup: 'pms-optgroup',
      optgroupLabel: 'pms-optgroup-label'
 		}
 	};

	function toggleSelected(elem, config) {
	  var sel = (elem.data('selected') === 'true');
	  var dis = (elem.data('disabled') === 'true');
    elem.toggleClass(config.selected, sel);
    elem.toggleClass(config.unselected, !sel);
    elem.toggleClass(config.disabled, dis);
	}
	
	function buildFakeOptions(elements, settings, divselect) {
	  elements.each(function() {
	    if(this[0].tagName == 'OPTGROUP'){
	      var subsel = $('<div/>');
	      var label = $('<div/>').html(this.attr('label'));
	      subsel.append(label[0].outerHTML);
        subsel.addClass(settings.optgroup);
        label.addClass(settings.optgroupLabel);
	      buildFakeOptions(this.select('option, optgroup'), settings, subsel);
	      divselect.append(subsel[0].outerHTML);
	      return true;
	    }
	    var op = $(this);
	    var disabled = (op.attr('disabled')) ? true : false;
	    var tid = 'pms-' + $.R();
	    var dv = $('<div/>')
	      .text(op.text())
	      .attr('title', op.text())
	      .attr('id', tid)
	      .data('selected', (op.attr('selected')) ? true : false)
	      .data('disabled', disabled);
	    toggleSelected(dv, settings);
	    divselect.append(dv[0].outerHTML);
			setTimeout(function() {
				$('div#' + tid).on('click', function() {
		      if(disabled) return;
		      if(op.attr('selected')){
		        //de-select
		        op[0].removeAttribute('selected');
		        $(this).data('selected', false);
		        toggleSelected($(this), settings);
		      } else {
		        //select
		        op.attr('selected', 'selected');
		        $(this).data('selected', true);
		        toggleSelected($(this), settings);
		      }
		    });
			}, 1);
	  });
	}
	
	$.extend($.fn, {
		multiSelect: function(options){
	    // Set defaults, incorporate passed-in options
	    var settings = $.extend($.multiSelect.defaults, options);
	    return $(this).each(function(){
	      // Wrap select in a div so that the select and pseudo-select will be siblings
	      this.wrap('<div class="' + settings.container + '"></div>');
	      var divselect = $('<div class="' + settings.pseudoSelect + '"></div>');
	      buildFakeOptions(this.select('option, optgroup'), settings, divselect);
	      this.hide().after(divselect[0].outerHTML);
	    });
		}
	});

})(Pika);
