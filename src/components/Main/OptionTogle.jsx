import styled from "styled-components";

const ToggleButton = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #f2f2f2;
    border-radius: 20px;
    height: 33px;
    padding: 0 12px;
    cursor: pointer;
`;

const Label = styled.span`
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 400;
    color: #616161;
    line-height: normal;
`;

const Arrow = styled.span`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #616161;
`;

export default function OptionTogle({ label }) {
    return (
        <ToggleButton>
            <Label>{label}</Label>
            <Arrow />
        </ToggleButton>
    );
}
