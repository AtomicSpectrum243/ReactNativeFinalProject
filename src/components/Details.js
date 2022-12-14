import React, { useState, useCallback, useRef } from "react";
import {View, Text, TouchableOpacity, Image, ScrollView, Button, Alert} from 'react-native';
import {COLOURS} from '../database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LogBox } from 'react-native';

// Fix Error Screen Navigation
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
// Navigation Route Data (Pass params to a route)
const Details = ({route, navigation}) => {
  const {
    name,
    image,
    Type,
    Skill,
    Time,
    material,
    FoodList,
    ingredients,
    isTopOfTheWeek,
  } = route.params;
// Details Screen
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLOURS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="angle-left"
            style={{
              fontSize: 15,
              color: COLOURS.black,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: COLOURS.accent,
            opacity: isTopOfTheWeek ? 1 : 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="star" style={{fontSize: 15, color: COLOURS.white}} />
        </View>
      </View>
      <Text
        style={{
          fontSize: 38,
          color: COLOURS.black,
          fontWeight: '800',
          paddingHorizontal: 20,
          maxWidth: 400,
        }}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View style={{paddingHorizontal: 20}}>
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              ???????????????????????????????????????
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              <MaterialCommunityIcons name="stove" style={{fontSize: 18, color: COLOURS.black}} />
              {Type}
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              ?????????????????????????????????????????????
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              <AntDesign name="star" style={{fontSize: 18, color: COLOURS.black}} />
              {Skill}
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              ??????????????????????????????????????????
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              <Ionicons name="timer" style={{fontSize: 18, color: COLOURS.black}} />
              {Time} ????????????
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 380,
            height: 380,
          }}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <Text
          style={{
            fontSize: 19,
            color: COLOURS.black,
            opacity: 0.5,
            fontWeight: '800',
            paddingHorizontal: 20,
            maxWidth: 310
        }}>
          ????????????????????????
          <MaterialCommunityIcons name="food-variant" style={{fontSize: 18, color: COLOURS.black}} />
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ingredients.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                margin: 10,
                width: 100,
                height: 100,
                borderRadius: 15,
                backgroundColor: COLOURS.white,
                elevation: 5,
              }}>
              <Image
                source={data}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
          );
        })}
      </ScrollView>
      <Text
          style={{
            fontSize: 19,
            color: COLOURS.black,
            opacity: 0.5,
            fontWeight: '800',
            paddingHorizontal: 20,
            maxWidth: 310
        }}>
          ?????????????????????
          <MaterialCommunityIcons name="food-turkey" style={{fontSize: 18, color: COLOURS.black}} />
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: COLOURS.black,
          fontWeight: '800',
          paddingHorizontal: 20,
          maxWidth: 350,
          margin: 15
        }}>
        {material}
      </Text>
      <Text
          style={{
            fontSize: 19,
            color: COLOURS.black,
            opacity: 0.5,
            fontWeight: '800',
            paddingHorizontal: 20,
            maxWidth: 310
        }}>
          ???????????????????????????
          <MaterialIcons name="food-bank" style={{fontSize: 18, color: COLOURS.black}} />
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: COLOURS.black,
          fontWeight: '800',
          paddingHorizontal: 20,
          maxWidth: 400,
          margin: 16
        }}>
        {FoodList}
      </Text>
      <View
        style={{
          width: '100%',
          bottom: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: '90%',
            height: 80,
            backgroundColor: COLOURS.accent,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLOURS.black,
              letterSpacing: 1,
              marginRight: 10,
            }}>
            ?????????????????????????????????????????????
          </Text>
          <Entypo
            name="home"
            style={{fontSize: 16, color: COLOURS.black}}
          />
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default Details;