/**
 * jQuery ServPac Link Dial script
 * 
 * This script modifies targeted phone numbers into ServPack Dial Hyperlinks 
 * that can be clicked and when properly configured with ServPac a phone will dial the number 
 * 
 * Dependencies: jQuery is required for this script to work (http://jquery.com)
 * 
 * License: No copyrights or licenses. If you find this useful however I don't mind some vodka:)
 * 
 * Author: Anze Znidarsic <a@anze.com>
 * 
 * URL: http://anze.com
 *
 * Note: ServPac is trademark of Servpac Inc. (http://servpac.com)
 *
 */
(function($) {
    $.fn.servPacLinkDial = function() {
        return this.each(function() {
            var $this = $(this);
            
            // save original number to be displayed as link
            var originalNumber = $this.html();
            
            // filter out all characters but numbers
            var filteredNumber = originalNumber.replace(/[^0-9]/g, '');
            
            // make ServPack Dial Hyperlinks
            var link = '<a href="https://www3.servpac.com/subscribers/callout?goback=yes&callee=' + filteredNumber + '">' + originalNumber + '</a>';
            $this.html(link);
        });
    };
})(jQuery);
