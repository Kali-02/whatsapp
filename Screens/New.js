// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   FlatList,
//   Image,
//   TouchableOpacity,
  
// } from 'react-native';
// import { Text } from 'react-native-elements';

// const DATA = [
//   {
//     id: '1',
//     imageUri: 'https://picsum.photos/id/237/200/300',
//   },
//   {
//     id: '2',
//     imageUri: 'https://picsum.photos/id/238/200/300',
//   },
//   {
//     id: '3',
//     imageUri: 'https://picsum.photos/id/239/200/300',
//   },
//   {
//     id: '4',
//     imageUri: 'https://picsum.photos/id/240/200/300',
//   },
//   {
//     id: '5',
//     imageUri: 'https://picsum.photos/id/241/200/300',
//   },
//   {
//     id: '6',
//     imageUri: 'https://picsum.photos/id/242/200/300',
//   },
//   {
//     id: '7',
//     imageUri: 'https://picsum.photos/id/243/200/300',
//   },
//   {
//     id: '8',
//     imageUri: 'https://picsum.photos/id/244/200/300',
//   },
//   {
//     id: '9',
//     imageUri: 'https://picsum.photos/id/245/200/300',
//   },
// ];

// const Item = ({ item, onPress, style }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//     <Image source={{ uri: item.imageUri }} style={styles.image} />
//   </TouchableOpacity>
// );

// const New = () => {
//   const [selectedIds, setSelectedIds] = useState([]);

//   const onItemPress = (id) => {
//     const index = selectedIds.indexOf(id);
//     if (index > -1) {
//       setSelectedIds((prev) => prev.filter((item) => item !== id));
//     } else {
//       setSelectedIds((prev) => [...prev, id]);
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isSelected = selectedIds.includes(item.id);
//     return (
//       <Item
//         item={item}
//         onPress={() => onItemPress(item.id)}
//         style={isSelected ? styles.selected : null}
//       />
//     );
//   };

//   const keyExtractor = (item) => item.id;

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={keyExtractor}
//         numColumns={3}
//       />
//       {selectedIds.length > 0 && (
//         <TouchableOpacity
//           onPress={() => {
//             setSelectedIds([]);
//           }}
//           style={styles.deleteButton}
//         >
//           <Text style={styles.deleteButtonText}>Delete</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };
// export default New
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   item: {
//     flex: 1,
//     margin: 5,
//     height: 100,
//   },
//   image: {
//     height: '100%',
//     width: '100%',
//     resizeMode: 'cover',
//   },
//   selected: {
//     borderWidth: 2,
//     borderColor: 'blue',
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   deleteButtonText: {
//     color: '#fff',
//   }
// }
// )
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [photos, setPhotos] = useState([]);

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo',
      multiple: true,
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhotos([...photos, ...response.assets]);
      }
    });
  };

  const renderPhotoItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => console.log(item)}>
        <Image source={{ uri: item.uri }} style={{ width: 100, height: 100, margin: 5 }} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleTakePhoto}>
        <Text style={{ fontSize: 20, color: 'blue' }}>Take Photo</Text>
      </TouchableOpacity>
      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPhotoItem}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default App;
