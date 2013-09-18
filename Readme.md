#Embers demo API 

##Install


```
git clone git@github.com:FireEmbers/demoAPI.git; cd demoAPI; npm install
```

###Usage example (see also [example.js](https://github.com/FireEmbers/demoAPI/blob/master/example/example.js))

run with 

`node example/example.js`

```
var embers = require('./../index');

var ignitionPt = [41 + 47 / 60 + 6.39/3600,- (8 + 8/60 + 26.43/3600)]; //[latitude, longitude]

var U = 5 // average wind speed at 10 meters above ground

var std = 10 //standard deviation in percentage of average speed

var alpha = 135 //wind direction, degrees clockwise from north


embers(ignitionPt, U, std, alpha, onIgnitionMaps);

function onIgnitionMaps(kmlMaps){

  //maps is an object with the contour array of 3 different forecast cases:

  fs.writeFileSync('worstCase.kml', kmlMaps['worstCase'], {encoding: 'utf8'});
  fs.writeFileSync('bestCase.kml', kmlMaps['bestCase'], {encoding: 'utf8'});
  fs.writeFileSync('averageCase.kml', kmlMaps['averageCase'], {encoding: 'utf8'});
}

```

##Results

The following image show average case, worst case and best case scenarios regarding wind speed variability

![embersDemo!](https://raw.github.com/FireEmbers/demoAPI/master/example/embersDemo.png)

