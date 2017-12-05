# React Native
Lib React Native :
+ react-native-image-preview : zoom image
+ react-native-image-progress : load image with indicator/  https://github.com/shoutem/ui
 +layout input text <View>
<KeyboardAwareScrollView>
<TextInput/>
</KeyboardAwareScrollView>   <Spinner/>
</View> + khi update version `react-native` những thư viện liên quan sẽ phải cập nhật đa số là phải cập nhật bằng tay Ex:  ”color": "^0.11.3",
ví dụ với thư viện `color` nếu không có ‘^’ sẽ không còn đúng nữa   
react-native-svg + remove `SVG-tvOS.a` + change `pathLength = [_path pathLength];` 
A temporary fix that works for me is to wrap the TextInput in a View with pointerEvents set to none.
That is:
<TouchableOpacity onPress={()=>{console.log('press')}}>
<View pointerEvents='none'>
<TextInput editable={false} />
</View>
</TouchableOpacity>
This is working for me right now on RN 0.47.1. 
Victory-native +VictoryChart +VictoryAxis +VictoryLine +VictoryBar +VictoryScatter không thể custom label https://formidable.com/open-source/victory/guides/custom-charts/ 





