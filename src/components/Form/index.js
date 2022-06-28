import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";
import { MaskedTextInput } from 'react-native-mask-text';
import ResultImc from './ResultImc';
import styles from "./styles";

export default function Form() {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(0);
    const [textButton, setTextButton] = useState("Calcular");
    const [erroMessage, setErroMessage] = useState('');

    const CalcImc = () => {
        return setImc((weight / (height * height)).toFixed(2));
    }

    const validationImc = () => {
        console.log(height);
        if (weight > 0 && height > 0) {
            CalcImc();
            Keyboard.dismiss();
            setMessageImc('Seu IMC é igual a: ');
            setTextButton('Calcular Novamente');
            setErroMessage('');
            return;
        };
        Vibration.vibrate();
        setErroMessage('Todos os campos são obrigatorios*');
        setTextButton('Calcular');
        setMessageImc("preencha o peso e altura");
        return;
    }

    return (
        <Pressable
            onPress={Keyboard.dismiss}
            style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <MaskedTextInput
                    mask='9.99'
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <MaskedTextInput
                    mask='99.9'
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
        </Pressable>
    );
}