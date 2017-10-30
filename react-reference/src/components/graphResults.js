import React, { Component } from "react";
import { ORFrame } from "semiotic";
import "../App.css";

class GraphResults extends Component {
    constructor(props) {
        super(props);

        this.renderResults = this.renderResults.bind(this);
    }

    renderResults(remapDatum) {
        const data = [];

        Object.keys(remapDatum).forEach((key, index) => {
            console.log(
                "Term:",
                key,
                "Value:",
                remapDatum[key],
                "RenderKey:",
                index
            );
            if (key !== "network") {
                data.push({
                    funnelKey: "#6290c3",
                    stepName: key,
                    stepValue: remapDatum[key],
                    renderKey: index,
                    _orFR: 526.3157894736842,
                    _orFV: 1000,
                    _orFX: 5,
                    _orFRZ: 526.3157894736842,
                    _orFRBase: -26.31578947368421,
                    _orFRBottom: -26.31578947368421,
                    _orFRMiddle: 236.84210526315786,
                    negative: false
                });
            }
        });

        console.log(data);

        return (
            <div key={Math.random()}>
                <p className="NetworkText">{remapDatum.network}</p>
                <ORFrame
                    size={[300, 300]}
                    data={data}
                    projection={"horizontal"}
                    type={"bar"}
                    oLabel={true}
                    oPadding={20}
                    oAccessor={d => d.stepName}
                    rAccessor={"stepValue"}
                    style={d => {
                        return { fill: d.funnelKey };
                    }}
                    hoverAnnotation={false}
                    margin={{ left: 55, top: 0, bottom: 50, right: 0 }}
                />
            </div>
        );
    }

    render() {
        const eachGraph = this.props.remap.map(this.renderResults);

        return <div className="ResultsContainer">{eachGraph}</div>;
    }
}

export default GraphResults;