# About

This script is used to make phone numbers on websites 'dialable'. When phone number is clicked user is redirected to ServPac login screen to initiate the session with their VoIP phone and after that phone automatically dials the number that was clicked. Login is required just the first time, after that ServPac remembers the user and whenever phone number is clicked phone automatically dials this number.

This script was developed for intranet system by Pacific Integrity LLC where insurance agents simply click on phone numbers and their phones dial those. It removes chances of agents dialing the wrong numbers when typing it manually on the phone.

Script can be used by anyone who uses ServPac phone system.

# Examples

To change all phone numbers into clickable ones in elements marked with class "phoneNumber":

```html
    <div class="phoneNumber">(808) 123-4567</div>
```
you need to add this line of code:
```javascript
    <script>
    $('.phoneNumber').servPacLinkDial();
    </script>
```
# License

This script can be used by anyone who find it useful without any restrictions.

ServPac is a trademark of Servpac Inc. (http://servpac.com)
