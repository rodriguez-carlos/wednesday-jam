import { useEffect, useState } from "react";
import { getTemperatureInfo } from "../api";
import cities from "../assets/datamock";
import { Container, MainHeading, BackgroundImage, Text, ActionButton } from "../components/ContentSections/common";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Watermark = styled.div`
    background-color: ${props => props.theme.colors.transparentLightGray};
    position: relative;
    width: 90%;
    top: 100px;
    left: 50%;
    padding: 1rem 0 2rem;
    transform: translateX(-50%);
    border-radius: 15px;
`;

const Welcome = () => {
    const theme = useTheme();


    const [selectedCity, setSelectedCity] = useState({});
    const [rawTemperature, setRawTemperature] = useState(0)
    const [temperature, setTemperature] = useState(0);
    const [isFarenheit, setIsFarenheit] = useState(true);

    useEffect(() => {
        const cityLottery = cities[Math.floor(Math.random() * 3)]
        setSelectedCity(cityLottery);
    }, []);

    useEffect(() => {
        (async () => {
            const data = await getTemperatureInfo(selectedCity.latitude, selectedCity.longitude);
            setRawTemperature(data)
            setTemperature(data)
        })();
    }, [selectedCity])

    return (
        <Container>
            <BackgroundImage bgImage={`url(${selectedCity.media})`}>
                {selectedCity ? 
                <Watermark>
                    <MainHeading 
                        fontSize='40px'>
                            Visit {selectedCity.city}, State of {selectedCity.state}
                    </MainHeading> 
                    <Text fontSize='20px'>Temperature is currently {temperature}° {isFarenheit ? 'F' : 'C'}</Text>
                    <ActionButton 
                        onClick={() => {
                            setIsFarenheit(!isFarenheit)
                            isFarenheit ? setTemperature(Math.floor((temperature - 32) * 0.5556)) : setTemperature(rawTemperature)
                        }}
                        color={theme.colors.white}>
                            Switch to {isFarenheit ? 'Celsius' : 'Farenheit'}
                    </ActionButton>
                </Watermark>
                    : ''
                }
            </BackgroundImage>
        </Container>
    )
};

export default Welcome;