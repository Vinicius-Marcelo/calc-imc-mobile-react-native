import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from './ResultImc';
import styles from "./styles";

export default function Form() {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 75.38'
                    keyboardType='numeric'
                />
                <TouchableOpacity
                    style={styles.buttonCalculador}
                    onPress={() => { validationImc() }}
                >
                    <Text
                        style={styles.textButtonCalculador}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}