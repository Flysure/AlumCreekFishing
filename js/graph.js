var chart = bb.generate({
  "data": {
    "columns": [
      [
        "data",
        0
      ]
    ],
    "type": "gauge",
    "onclick": function (d, i) { console.log("onclick", d, i); },
    "onmouseover": function (d, i) { console.log("onmouseover", d, i); },
    "onmouseout": function (d, i) { console.log("onmouseout", d, i); }
  },
  "gauge": {},
  "color": {
    "pattern": [
      "#FF0000",
      "#F97600",
      "#F6C600",
      "#60B044"
    ],
    "threshold": {
      "values": [
        30,
        60,
        90,
        100
      ]
    }
  },
  "size": {
    "height": 180
  },
  "bindto": "#Chart"
});

setTimeout(function () {
	chart.load({
		columns: [['data', 75]]
	});
}, 1000);
