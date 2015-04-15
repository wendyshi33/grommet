// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Donut = require('ligo/components/Donut');
var LigoDocument = require('ligo/components/Document');

var DonutDoc = React.createClass({

  render: function() {
    var inline =
      "<Donut series={[\n  {label: <label>, value: <value>, colorIndex: <index>},\n  ...\n]} />";
    var seriesStructure =
      "{\n  label: <label>,\n  value: <value>,\n  colorIndex: (1-6|<status>)\n}";

    var genericSeries = [
      {label: 'Used', value: 10, units: 'TB'},
      {label: 'Available', value: 20, units: 'TB'}
    ];

    var statusSeries = [
      {label: 'Error', value: 10, colorIndex: 'error'},
      {label: 'Warning', value: 20, colorIndex: 'warning'},
      {label: 'OK', value: 70, colorIndex: 'ok'}
    ];

    return (
      <LigoDocument>
        <header>
          <h1>Donut</h1>
          <p>Shows a circular graphic.</p>

          <pre><code className="html">{inline}</code></pre>
        </header>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>series  {"[{}, ...]"}</code></dt>
            <dd>An array of objects describing the data:
              <pre><code>{seriesStructure}</code></pre>
            </dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Generic</h3>
          <div className="example">
            <Donut series={genericSeries} />
          </div>
          <pre><code className="html">
            {"<Donut series={" + JSON.stringify(genericSeries, null, '  ') + "} />"}
          </code></pre>

          <h3>Status</h3>
          <div className="example">
            <Donut series={statusSeries} />
          </div>
          <pre><code className="html">
            {"<Donut series={" + JSON.stringify(statusSeries, null, '  ') + "} />"}
          </code></pre>

        </section>
      </LigoDocument>
    );
  }
});

module.exports = DonutDoc;