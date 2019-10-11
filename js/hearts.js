(function(global) {
  global.insiteScripts = global.insiteScripts || {};
  global.insiteScripts.hearts = global.insiteScripts.hearts || function hearts(scriptOptions) {
    var dmSmartScriptDuration = scriptOptions.duration,
      dmSmartScriptSettings = scriptOptions.settings,
      dmSmartScriptRuleId = scriptOptions.ruleId;

    setTimeout(function() {
      $.getScript("/_dm/s/rt/smart/jquery.snow.custom.js", function() {
        $.fn.snow({
          flakeChar: '&#x2764;',
          maxSize: 24,
          flakeColors: ["red"],
          durationMillis: typeof dmSmartScriptDuration == "undefined" ? null : dmSmartScriptDuration * 1000
        });
      });
    }, 500);
  };
})(this);

// taken from /https://www.the-dutchie.com/?utm_source=tripadvisor&utm_medium=referral
// include this in the html page - <script src="/_dm/s/rt/smart/hearts.js" type="text/javascript"></script>
