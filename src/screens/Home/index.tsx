import { View, Image, FlatList, Text, Appearance } from 'react-native';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { GAMES } from '../../utils/games';
import logoImg from "../../assets/logo-nlw-esports.png";

export function Home() {
   return (
      <View style={styles.container}>
         <Image source={logoImg} style={styles.logo} />
         <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...' />
         <FlatList
            contentContainerStyle={styles.contentList}
            data={GAMES}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <GameCard data={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
         />
      </View>
   );
}