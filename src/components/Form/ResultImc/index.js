import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './styles';

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: 'Meu IMC hoje é: ' + props.resultImc
        });
    };

    return (
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                {props.resultImc > 0 &&
                    <TouchableOpacity
                        onPress={() => onShare()}
                        style={styles.shared}>
                        <Text style={styles.sharedText}>Compartilhar</Text>
                    </TouchableOpacity>
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc > 0 && props.resultImc}</Text>
        </View>
    );
}