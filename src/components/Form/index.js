import { View, Text, TextInput, Button } from "react-native";
import ResultImc from './ResultImc';
import { useState } from 'react';

export default function Form() {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(0);
    const [textButton, setTextButton] = useState("Calcular");

    const CalcImc = () => {
        return setImc((weight / (height * height)).toFixed(2));
    }

    const validationImc = () => {
        if (weight === 0 && height === 0) return;
        CalcImc();
        setHeight(0);
        setWeight(0);
        setMessageImc('Seu IMC é igual a: ');
        setTextButton('Calcular Novamente');
        return;
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 75.38'
                    keyboardType='numeric'
                />
                <Button
                    onPress={() => validationImc()}
                    title={textButton}
                />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}