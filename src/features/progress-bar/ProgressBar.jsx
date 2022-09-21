import styled from "styled-components";
import {countValues} from "./progressBarUtils";
import Stats from "./Stats";
import Bars from "./Bars";

function ProgressBar({items, width, height}) {
    const totalValue = countValues(items);

    return (
        <ProgressBarComponent width={width}>
            <Bars
                items={items}
                totalValue={totalValue}
                width={width}
                height={height}
            />
            <Stats items={items} totalValue={totalValue} />
        </ProgressBarComponent>
    )
}

const ProgressBarComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props?.width}px;
`;

export default ProgressBar;
