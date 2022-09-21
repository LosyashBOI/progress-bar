import styled from "styled-components";
import {getPercentOfValue} from "./progressBarUtils";

function Stats({items, totalValue}) {
    const statList = items.map((item, index) => {
        const {value, color, name} = item;
        const percent = getPercentOfValue(value, totalValue);

        return (
            <StatsItem key={index} color={color}>
                {`${name}: ${value} (${percent.toFixed(1)}%)`}
            </StatsItem>
        );
    });

    return (
        <StatsList>
            {statList}
        </StatsList>
    );
}

const StatsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 5px;
    margin: 0;
    padding: 10px 0 0;
    list-style: none;
`;

const StatsItem = styled.li`
    text-align: center;
    &:before {
      content: '';
      display: inline-block;
      margin: 0 5px 0 5px;
      width: 10px;
      height: 10px;
      background-color: ${props => props.color};
      border-radius: 50%;
    }
    &::marker {
      color: ${props => props.color};
      font-size: 2em;
    }
`;

export default Stats
