import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Gradient = styled(LinearGradient).attrs({
    colors: ['#1A1A1A', '#252525'],
    start: { x: 0.6, y: 0.6 },
})`
    flex: 1;
`;
