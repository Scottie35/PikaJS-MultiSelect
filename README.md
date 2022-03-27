# PikaJS-MultiSelect

MultiSelect plugin for PikaJS that is only **1.48KB** minified!!

[Try the PikaJS Demo!](https://pikajs.com/)

## What is PikaJS?

[PikaJS](https://github.com/Scottie35/PikaJS) is a client-side scripting library like jQuery, but 7 times smaller, faster, and more efficient.

**You must include PikaJS before adding PikaJS Hotkeys to your page!**

## What does it do?

Pika's MultiSelect plugin turns ordinary SELECT multi-select lists into fancy ones. Specifically, you no longer have to hold Ctrl or Command down to select multiple options. Pretty simple, but essential from a UI perspective.

MultiSelect is very small, simple, and very easy to use:
  
### .multiSelect

First, pick the select list and make sure the HTML works. You'll need something like this:

    <select id="myselect" multiple="multiple">
      <option value="1">Cheese</option>
      <option value="2">Beer</option>
      <option value="3">Fish</option>
    </select>

Then, inside DOMloaded, do this:

    // PikaJS DOM loaded
    $(function() {
      // ...
      $('select#myselect').multiSelect();
      // ...
    });

You can pass options to `.multiSelect` if you want. Any options you pass will override the `defaults`, which are:

    $.multiSelect.defaults = {
      container: 'pms-container',
      pseudoSelect: 'pms-pseudo-select',
      selected: 'pms-selected',
      unselected: 'pms-unselected',
      disabled: 'pms-disabled',
      optgroup: 'pms-optgroup',
      optgroupLabel: 'pms-optgroup-label'
    }

These options just define the class names that will be used to create a virtual SELECT list that does the single-click MultiSelect Magic. See the included CSS file to get you started. You can rename the classes or change the CSS however you'd like.
  
Note that OPTGROUPs are also supported.
  
Other than that, you're done! Wasn't that easy?

[Try the PikaJS Demo!](https://pikajs.com/)
  
**That's all, folks!**
