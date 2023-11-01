import normalize from "react-native-normalize"

const themes = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
        green: '#00FF00',
        gray: '#CCCCCC',
        blue: '#286FCB',
        red: '#FF0000',
    },
    fonts: {
        bold: 'PlaypenSans-Bold',
        regular: 'PlaypenSans-Regular',
    },
    fontSize: (fontNumber: number) => `${normalize(fontNumber)}px`,
};

export default themes;
