import { StyleSheet } from 'react-native'

const insideStyles = StyleSheet.create({
    ImageBackground: {
        height: "100%"
    },
    Mainview: {
        borderBottomWidth: 1,
        borderBottomColor: "white",
        backgroundColor: "red"
    },
    imgContainer: {
        marginTop: -1,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        width: "100%",
        backgroundColor: "#272e36",
        height: 80,
        marginLeft: 0
    },
    input: {
        color: "white",
        backgroundColor: "#1f2c34",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius:10,
        fontWeight: "bold",
        width: "78%",
        fontSize: 17,
        height: 44,
        marginLeft: "11%"
    },
    text21: {
        color: "white",
        fontSize: 18,
        borderRadius: 10,
        fontWeight: "300",
        maxWidth: "60%",
        padding: 6,
        backgroundColor: "#005d4b",
        marginLeft: "50%",
        marginBottom: "1%",
        marginRight: "1%",
        position: "relative"

    },
    text: {
        flexDirection: "row-reverse",
    },
    Icon1:
    {
        marginTop: 15,
        color: "white",
        marginLeft: "1%"
    },
    View1: {

        marginBottom: "2%",
        position: "absolute",
        bottom: 1
    },
    Icon2: {
        marginLeft: '89%',
        marginTop: "-12%",
        borderRadius: 20,
    },
    typeview: {
        width: "10%",
        marginBottom: "1%",
        // height: "86%",
        alignItems: "center",
        backgroundColor: "#1f2c34",
        marginTop: "-10%",
        padding: 2,
        marginLeft: "2%",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    }

})
export default insideStyles;