import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    width: 181px;
`;

const ImageWrapper = styled.div`
    width: 181px;
    height: 237px;
    overflow: hidden;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProductName = styled.p`
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    color: #333333;
    line-height: normal;
    width: 100%;
    margin: 0;
`;

const ProductPrice = styled.p`
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    color: #000000;
    line-height: normal;
    width: 100%;
    margin: 0;
`;

const ReviewCount = styled.p`
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    color: #a7a7a7;
    line-height: normal;
    width: 100%;
    margin: 0;
`;

export default function ItemCard({ image, name, price, reviewCount }) {
    return (
        <CardContainer>
            <ImageWrapper>
                <ProductImage src={image} alt={name} />
            </ImageWrapper>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
            <ReviewCount>리뷰 {reviewCount}</ReviewCount>
        </CardContainer>
    );
}
