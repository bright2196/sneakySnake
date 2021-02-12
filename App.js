// DEPLACEMENT D’UN OBJET GRAPHIQUE
// App.js
import React, { useState } from 'react';
import { View, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  // variable d'état, setter de la variable d'état = valeur d'initiale

  const [marginLeft, setMarginLeft] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const [snakeX, setSnakeX] = useState(0);
  const [snakeY, setSnakeY] = useState(0);

  

  var grid = new Array(25);
  for (var i = 0; i < 25; i++) {
    grid[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  grid[0][0] = 1;


  
  const moveRight = () => {
    if(snakeY < 24) {
      setSnakeY(snakeY+1);
      grid[snakeX][snakeY] = 1;
      grid[snakeX][snakeY-1] = 0;
      setMarginLeft(marginLeft + 2);
      console.log(grid);
    }
  };

  const moveLeft = () => {
    if(snakeY > 0) {
      setSnakeY(snakeY-1);
      grid[snakeX][snakeY] = 1;
      grid[snakeX][snakeY+1] = 0;
      setMarginLeft(marginLeft - 2);
      console.log(grid);
    }
  };

  const moveUp = () => {
    if(snakeX > 0) {
      setSnakeX(snakeX-1);
      grid[snakeX][snakeY] = 1;
      grid[snakeX+1][snakeY] = 0;
      setMarginTop(marginTop - 2);
      console.log(grid);
    }
  };

  const moveDown = () => {
    if(snakeX < 24) {
      setSnakeX(snakeX+1);
      grid[snakeX][snakeY] = 1;
      grid[snakeX-1][snakeY] = 0;
      setMarginTop(marginTop + 2);
      console.log(grid);
    }
  };

 

  const styles = StyleSheet.create({
    gameArea: {
      backgroundColor: '#000',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gameBox: {
      width: '50vw',
      height: '50vw',
      borderWidth: 2,
      borderColor: '#E0CF04'
    },
    snake: {
      width: '2vw',
      height: '2vw',
      backgroundColor: 'white',
      marginLeft: marginLeft + 'vw',
      marginTop: marginTop + 'vw'
    },

    buttonLeft: {
      width: '15vw',
      backgroundColor: '#E0CF04',
      color: '#0E0E0E',
      position: 'absolute',
      left: '15%',
      bottom: '15%',
      borderRadius: "20%",
    }, 

    buttonRight: {
      width: '15vw',
      backgroundColor: '#E0CF04',
      color: '#0E0E0E',
      position: 'absolute',
      right: '15%',
      bottom: '15%',
      borderRadius: "20%",
    }, 

    buttonUp: {
      width: '15vw',
      backgroundColor: '#E0CF04',
      color: '#0E0E0E',
      position: 'absolute',
      right: '43%',
      bottom: '25%',
      borderRadius: "20%",
    },


    buttonDown: {
      width: '15vw',
      backgroundColor: '#E0CF04',
      color: '#0E0E0E',
      position: 'absolute',
      right: '43%',
      bottom: '5%',
      borderRadius: "20%",
    },
    
    




  });
  

  return (
    <View style={styles.gameArea}>
      <Button
        onPress={() => { console.log(grid) }}
        title="afficher tableau console"
      />

      <View style={styles.gameBox}>
        <View style={styles.snake}></View>
        <View style={styles.food}></View>
      </View>

      <View style={styles.buttonRight}>
      <Button
        onPress={() => { moveRight() }}
        title="➡"
        color= '#0E0E0E'
      />
      </View>

      <View style={styles.buttonLeft}>
      <Button
        onPress={() => { moveLeft() }}
        title="⬅"
        color= '#0E0E0E'
      />
      </View>

      <View style={styles.buttonUp}>
      <Button
        onPress={() => { moveUp() }}
        title=" ⬆ "
        color= '#0E0E0E'
      />
      </View>

      <View style={styles.buttonDown}>
      <Button
        onPress={() => { moveDown() }}
        title="⬇"
        color= '#0E0E0E'
      />
      </View>
    </View>
  );
}

// via une fonction (déclarable en dehors de la classe)
const grosStyle = function (gauche) {
  return {
    height: 50,
    width: 50,
    marginTop: 10,
    backgroundColor: "red",
    marginLeft: gauche,
  }
}
