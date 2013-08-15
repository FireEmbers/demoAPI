var embers = require('./../index');
var write2D = require('embersutils').write2D;

var ignitionPt = [ 41 + 47 / 60 + 6.39/3600,- (8 + 8/60 + 26.43/3600)];

var U = 1;
var alpha= 135;
var std = 10;

embers(ignitionPt, U, std, alpha, function(maps){

  var rows = 20; 
  var cols = 20;
  
  write2D (maps['worstCase'], rows, cols, 'worstCase.map') ;
  write2D (maps['bestCase'], rows, cols, 'bestCase.map') ;
  write2D (maps['averageCase'], rows, cols, 'averageCase.map') ;
  write2D (maps['clc'], rows, cols, 'clc.map');
});





