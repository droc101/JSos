 $(function() {
   $("#window").draggable({
     handle: '#titlebar'
   });
   $("#Settings").draggable({
     handle: '#Settings-Bar'
   }).resizable({});
   $("#Files").draggable({
     handle: '#Files-Bar'
   }).resizable({
     maxHeight: 300,
     minHeight: 300
   });
   $("#filesList").resizable({
     maxHeight: 243,
     minHeight: 243,
     maxWidth: 150,
     minWidth: 50
   });
   $('.message').draggable({
     handle: '#close'
   });
   $('#msgBox').draggable({
     handle: '#msgBar'
   });
   $('#confBox').draggable({
     handle: '#confBar'
   });
   $('#textBox').draggable({
     handle: '#textBar'
   });
   $('.nc').draggable();
   $('#menu').draggable();
   $('#themeBox').draggable({
     handle: '#themeBar'
   });
   $("#webBox").draggable({
     handle: '#webBar'
   }).resizable({});
 });
 $("#Settings").hide();
 $("#Files").hide();
 $("#msgBox").hide();
 $('.message').hide();
 $("#confBox").hide();
 $('#textBox').hide();
 $('#menu').hide();
 $('.nc').hide();
 $('#themeBox').hide();
 $('#tab2').hide();
   $('#tab3').hide();
 $("#test").click(function() {
   $('#msgText').text("Notification System Is Not Working. Error Code: 0045 Error Description: Failed to add notification. {{addToNotificationCache}} eventArgs returned ({errorFailedToLocateCache}) The error previously mentioned caused the operation to fail.");
 });
 $("#info").click(function() {
   $('#msgText').text("The notification system is currently incomplete. Application Notifications should be sent to a messagebox to be displayed. Click Test notification system to check the system.");
 });
 $("#apps").click(function() {
   $('#menu').show();
 });
 $("#nc").click(function() {
   $('.nc').show();
 });
 $("#menu").click(function() {
   $('#menu').hide();
 });
 $("#logIn").click(function() {
   $('#window').hide();
 });
 $("#setColor").click(function() {
   $('body').css('background', $('#color').val());
   $('#themeBox').hide();
 });
 $("#themeShow").click(function() {
   $('#themeBox').show();
 });
 var auth = function() {
   var authName = '';
   var authPass = '';
   var authToken = 'jsos_A63';
   var homePath = '/home/';
   var rootFolder = '/home/root/, /bin/sudo';
   authName = $('#user-id').val();
   authPass = $('#user-code').val();
   var rootPassword = 'jsOS Admin';
   var userPassword = 'jsOS'
   if (authName === 'root' && authPass === rootPassword) {
     $('#window').hide();
     return 'auth_is_valid';
   } else if (authName === 'user' && authPass === userPassword) {
     $('#window').hide();
     return 'auth_is_valid';
   } else {
     $('#status').text('Username Or Password Incorrect')
     return 'auth_is_invalid';
   }
 }
 $("#logIn").click(function() {
   auth();
 });
 
  $("#1").click(function() {
   $('#tab1').show();
   $('#tab2').hide();
   $('#tab3').hide();
 });
 
 $("#2").click(function() {
   $('#tab1').hide();
   $('#tab2').show();
   $('#tab3').hide();
 });
  
 $("#3").click(function() {
   $('#tab1').hide();
   $('#tab2').hide();
   $('#tab3').show();
 });
 /*$('.checkbox').click(function () {
 		if ($('#checkbox').html('<i class="material-icons" id="checkbox" style="font-size:20px;">check_box</i>')) {
    	$('#checkbox').html('<i class="material-icons" id="checkbox" style="font-size:20px;">check_box_outline_blank</i>');
    }
 });*/
 
