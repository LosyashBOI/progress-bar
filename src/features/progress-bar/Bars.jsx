import {getPercentOfValue, getValueOfPercent} from "./progressBarUtils";
import styled from "styled-components";

const MAX_BAR_WIDTH = 20;

function Bars({items, totalValue, width, height}) {
    const barsAmount = Math.ceil(width / MAX_BAR_WIDTH);
    let bars = [];

    items.forEach(item => {
        const {value, color, name} = item;

        const percent = getPercentOfValue(value, totalValue);
        const capsNum = getValueOfPercent(barsAmount, percent);

        for (let i = 0; i < capsNum; i++) {
            const bar = (
                <Bar
                    height={height}
                    color={color}
                    key={name + i}
                />
            );
            bars.push(bar);
        }
    });

    return (
        <ProgressBars>
            {bars}
        </ProgressBars>
    );
}

const ProgressBars = styled.div`
    display: flex;
    width: inherit;
`;

const Bar = styled.div`
    width: ${MAX_BAR_WIDTH}px;
    height: ${props => props?.height}px;
    background-color: ${props => props.color};
    border-radius: 5px;
  
    &:not(:last-child) {
      margin-right: 2px;
    }
`;

export default Bars;
