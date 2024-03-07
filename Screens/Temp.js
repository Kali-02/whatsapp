import React from "react";
import { Text, Platform, KeyboardAvoidingView, View, ScrollView } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

const TempScreen = () => {
	const richText = React.useRef();
	return (
        <View>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
                    <Text>Descrip:</Text>
                    <RichEditor
                        ref={richText}
                        onChange={ descriptionText => {
                            console.log( descriptionText);
                        }}
                    />
                </KeyboardAvoidingView>
            </ScrollView>

            <RichToolbar
                editor={richText}
                actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, actions.redo,actions.undo]}
                iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
            />
        </View>
    );
};

export default TempScreen;