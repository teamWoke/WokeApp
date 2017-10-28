import React, { Component } from "react";
import { ORFrame } from "semiotic";
import "../App.css";

class GraphResults extends Component {
    constructor(props) {
        super(props);
        this.showTopics = this.showTopics.bind(this);
    }
    showTopics(term) {
        console.log("Inside.showTopics", term);

        const fillColors = ["6290c3", "#d5573b", "#aaaaaa"];

        const data = [
            {
                funnelKey: fillColors[0],
                stepName: `${term.term}`,
                stepValue: `${term.cnn}`,
                renderKey: 0,
                _orFR: 526.3157894736842,
                _orFV: 800,
                _orFX: 5,
                _orFRZ: 526.3157894736842,
                _orFRBase: -26.31578947368421,
                _orFRBottom: -26.31578947368421,
                _orFRMiddle: 236.84210526315786,
                negative: false
            },
            {
                funnelKey: fillColors[1],
                stepName: `${term.term}`,
                stepValue: `${term.bbc}`,
                renderKey: 1,
                _orFR: 473.6842105263158,
                _orFV: 900,
                _orFX: 80,
                _orFRZ: 473.6842105263158,
                _orFRBase: -26.31578947368421,
                _orFRBottom: -26.31578947368421,
                _orFRMiddle: 210.52631578947367,
                negative: false
            },
            {
                funnelKey: fillColors[2],
                stepName: `${term.term}`,
                stepValue: `${term.fox}`,
                renderKey: 2,
                _orFR: 263.1578947368421,
                _orFV: 500,
                _orFX: 155,
                _orFRZ: 263.1578947368421,
                _orFRBase: -26.31578947368421,
                _orFRBottom: -26.31578947368421,
                _orFRMiddle: 105.26315789473684,
                negative: false
            }
        ];

        return(
            <div key={Math.random()}>
            <ORFrame
                size={[200,300]}
                data={data}
                projection={"vertical"}
                type={"bar"}
                oLabel={true}
                oAccessor={d => d.stepName}
                rAccessor={"stepValue"}
                style={d => {
                    return { fill: d.funnelKey };
                }}
                hoverAnnotation={false}
                margin={{ left: 50, top: 10, bottom: 50, right: 0 }}
            />
            </div>
            );
    }

    render() {
        const resultsDiv = this.props.eachResult.map(this.showTopics);

        return (
            <div className="ResultsContainer">{resultsDiv}</div>
        );
    }
}

export default GraphResults;