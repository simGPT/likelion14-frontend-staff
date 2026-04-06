import styled from "styled-components";
import logoUrl from "../../assets/images/kream_image.png"
import homeUrl from "../../assets/icons/home_icon.png"

// 대문자로 시작! -> 대문자를 컨포넌트로 인식하기 때문
const LogoImage = styled.img`
    width: 166px;
    height: 141px;
`;

const HomeIcon = styled.img`
    width: 61px;
    height: 24px;
`;

const HeaderContainer = styled.div`
    padding-right: 160px;
    padding-left: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export default function Header(){

    return(
        <div>
            <HeaderContainer>
                <LogoImage src={logoUrl}/>
                <HomeIcon src={homeUrl}/>
            </HeaderContainer>
            
        </div>
    );
}

