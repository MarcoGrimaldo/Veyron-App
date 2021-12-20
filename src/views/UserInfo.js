import * as React from 'react';

import {StyleSheet,View,ScrollView} from 'react-native';
import { Avatar,Title , Subheading, Headline, List  } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserInfo = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView>
          <View style={styles.avatarSt}>
            <Avatar.Text size={124} label="AM" />
          </View>
          <View style={styles.avatarSt}>
            <Headline>Andrés Manuel Lopez Obrador</Headline>
            <Title>Desarrollador</Title>
            <Subheading>Texto</Subheading>
          </View>
          <View>
            <List.Section title="Horario">
                <List.Accordion
                    title="Lunes">
                    <List.Item title="9:00 am - 2:00 pm"  left={() => <Ionicons name="chevron-up-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="2:00 pm - 3:00 pm"  left={() => <Ionicons name="chevron-forward-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="3:00 pm - 6:00 pm"  left={() => <Ionicons name="chevron-down-circle-outline" size={30} color={'#841584'}/>}/>
                </List.Accordion>
                <List.Accordion
                    title="Martes">
                    <List.Item title="9:00 am - 2:00 pm"  left={() => <Ionicons name="chevron-up-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="2:00 pm - 3:00 pm"  left={() => <Ionicons name="chevron-forward-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="3:00 pm - 6:00 pm"  left={() => <Ionicons name="chevron-down-circle-outline" size={30} color={'#841584'}/>}/>
                </List.Accordion>
                <List.Accordion
                    title="Miercoles">
                    <List.Item title="9:00 am - 2:00 pm"  left={() => <Ionicons name="chevron-up-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="2:00 pm - 3:00 pm"  left={() => <Ionicons name="chevron-forward-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="3:00 pm - 6:00 pm"  left={() => <Ionicons name="chevron-down-circle-outline" size={30} color={'#841584'}/>}/>
                </List.Accordion>
                <List.Accordion
                    title="Jueves">
                    <List.Item title="9:00 am - 2:00 pm"  left={() => <Ionicons name="chevron-up-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="2:00 pm - 3:00 pm"  left={() => <Ionicons name="chevron-forward-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="3:00 pm - 6:00 pm"  left={() => <Ionicons name="chevron-down-circle-outline" size={30} color={'#841584'}/>}/>
                </List.Accordion>
                <List.Accordion
                    title="Viernes">
                    <List.Item title="9:00 am - 2:00 pm"  left={() => <Ionicons name="chevron-up-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="2:00 pm - 3:00 pm"  left={() => <Ionicons name="chevron-forward-circle-outline" size={30} color={'#841584'}/>}/>
                    <List.Item title="3:00 pm - 6:00 pm"  left={() => <Ionicons name="chevron-down-circle-outline" size={30} color={'#841584'}/>}/>
                </List.Accordion>

            </List.Section>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    avatarSt: {
      width: '100%',
      alignItems: 'center',
      marginTop: 24,
    },
    txtContainer: {
      alignItems: 'center',
      marginTop: 24,
    }
  })

export default UserInfo
