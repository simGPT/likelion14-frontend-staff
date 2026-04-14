import styled from "styled-components";
import ItemCard from "../../components/Main/ItemCard";
import OptionTogle from "../../components/Main/OptionTogle";
import sortIcon from "../../assets/icons/sort_icon.png"
import { useState } from "react";

import { itemData } from "../../components/Main/itemDummy";

export default function Main() {
    const [sortOpen,setSortOpen]=useState(false);

  return (
    <Container>
      <OptionBar>
        <OptionTogle label="성별" />
        <OptionTogle label="색상" />
        <OptionTogle label="사이즈" />
        <OptionTogle label="가격대" />
        <OptionTogle label="종류" />
      </OptionBar>
      <SortWrapper>
        <SortButton onClick={() => setSortOpen(!sortOpen)}>
          정렬순
          <img src={sortIcon}/>
        </SortButton>
        {sortOpen && (
          <SortBox>
            <SortOption $active>기본 정렬순</SortOption>
            <SortOption>평점 높은순</SortOption>
            <SortOption>리뷰 많은순</SortOption>
          </SortBox>
        )}
      </SortWrapper>
      <ItemContainer>
        {itemData.map((data,index) => (
          <ItemCard
            key={index}
            itemId={data.itemId}
            image={data.imageUrl}
            name={data.name}
            price={data.price}
            reviewCount={data.reviewCount}
          />
        ))}
      </ItemContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 160px;
  padding-right: 160px;
  gap: 20px;

`;
const OptionBar = styled.div`
  display: flex;
  gap: 10px;
`;
const SortButton = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 7px;
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 400;
    color: #616161;
    cursor: pointer;
`;
const SortWrapper = styled.div`
    position: relative;
    margin-left: auto;
`;

const SortBox = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    width: 118px;
    background: white;
    border: 0.3px solid rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 15px 11px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 10;
`;

const SortOption = styled.p`
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    color: ${({ $active }) => ($active ? "#333333" : "#afafaf")};
    margin: 0;
    cursor: pointer;
    line-height: normal;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;
