var countdown = function(end, elements) {
  var _second = 1000,
  _minute = _second * 60,
  _hour = _minute * 60,
  _day = _hour * 24,

  end = new Date(end),
  timer,

  calculate = function() {

    var now = new Date(),
        remaining = end.getTime() - now.getTime(),
        data;

    if(isNaN(end)) {
      console.log('Invalid Date');
      return;
    }

    if(remaining <= 0) {
      // clear timer
      // callback
    } else {
      if(!timer) {
        timer = setInterval(calculate, _second);
      }
    };

    data = {
      'days': Math.floor(remaining / _day),
      'hours': Math.floor((remaining % _day) / _hour),
      'minutes': Math.floor((remaining % _hour) / _minute),
      'seconds': Math.floor((remaining % _minute) / _second)
    }

    if(elements.length) {
      for(x in elements) {
        var x = elements[x];
        document.getElementById(x).innerHTML = data[x];
      }
    };

  };

  calculate();
};
