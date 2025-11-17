 /**
  Advanced Checkbox Hack
  
  # What? #
  The better Checkbox-Hack because it works for both iOS and Android. 

  ## 1. Android <= 4.1.2
  pseudo-class + general/adjacent sibling doesn't 
  work on Android so we need a hack:

  body { -webkit-animation: bugfix infinite 1s; }
  @-webkit-keyframes bugfix { from {padding:0;} to {padding:0;} }

  ## 2. iOS < 6.0
  Due to a bug on iOS it's not possible to click the label
  to toggle the input (checkbox), so we add an empty 
  onclick to the label:

  <label for="button" onclick>click / touch</label>


  # 2012 by Tim Pietrusky
  # timpietrusky.com
**/