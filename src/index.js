import $ from 'jquery';
import circleProgress from 'jquery-circle-progress';

//import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#circle').circleProgress({
    value: 0.62,
    size: 140,
    startAngle:-Math.PI/2,
    thickness:6,
    fill: {
      gradient: ["red", "orange"]
    }
  });
});
