import Svg, {
  Path,
  Rect,
  Use,
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  Text as SVGText
} from 'react-native-svg';
import React from 'react';
import {  Dimensions, Animated, } from 'react-native';

const AnimatePath = Animated.createAnimatedComponent(Path);
const paths = (XPosition = 0) => [
  `C ${11.214641 + XPosition},${138.1353} ${12.474334 + XPosition},${139.66688} ${19.432015 + XPosition},${135.94324}`,
  `C ${23.613059 + XPosition},${133.70561} ${25.904118 + XPosition},${125.15556} ${29.844329 + XPosition},${122.51683}`,
  `C ${31.237403 + XPosition},${121.58391} ${33.679762 + XPosition},${121.09544} ${35.324494 + XPosition},${121.42081}`,
  `C ${37.650497 + XPosition},${121.88095} ${40.248917 + XPosition},${124.10386} ${41.900694 + XPosition},${125.80493}`,
  `C ${44.061649 + XPosition},${128.03038} ${44.829109 + XPosition},${132.80944} ${47.380861 + XPosition},${134.5732}`,
  `C ${51.518484 + XPosition},${137.43314} ${59.872297 + XPosition},${134.74617} ${63.821358 + XPosition},${137.86131}`,
  `C ${67.517622 + XPosition},${140.77703} ${70.397557 + XPosition},${152.10974} ${70.397557 + XPosition},${152.10974}`,
  `L ${81.357889 + XPosition},${70.10559}`,
  `L ${81.934088 + XPosition},${129.93437}`,
  `C ${81.934088 + XPosition},${172.93437} ${87.371408 + XPosition},${144.80354} ${95.60632 + XPosition},${137.86131}`,
  `C ${101.14275 + XPosition},${133.19394} ${112.47963 + XPosition},${136.92971} ${119.71905 + XPosition},${136.76526}`,
  `C ${126.62227 + XPosition},${136.60845} ${135.97174 + XPosition},${138.15362} ${142.73574 + XPosition},${136.76526}`,
]

const ECG_PATH=[1,2,3,4,5,6,7].map((e,i)=>paths(142*i))
const _data = `M0,${140}
  ${ECG_PATH.join("")}
  `;

export default class SvgBeat extends React.Component {
  svgWidth = 0;
  constructor(props) {
    super(props);
    this._myCircle = null;
    this.state = {
      animatedValue: new Animated.Value(0)
    }
  }
  componentWillMount() {
    console.log([].concat(...ECG_PATH))
    this.state.animatedValue.addListener(({ value }) => {
      this._path?.setNativeProps({
        d: `M0,140 ${([].concat(...ECG_PATH)).slice(0,value).join(" ")}`,
      });
    });
  }

  componentDidMount() {

    Animated.timing(this.state.animatedValue, {
      toValue: (ECG_PATH.length)*(paths().length),
      useNativeDriver: true,
      duration: 5000,

    }).start();

  }
  render() {

    return (
      <Svg height="100" width={Dimensions.get('screen').width*1.5} onLayout={(e) => { }} >
      <Defs >
        <Pattern id="square" width="10" height="10" patternUnits="userSpaceOnUse">
          <Rect width="10" height="10" fill="none" stroke="#eee" />
        </Pattern>
        <Pattern id="quad" width="20" height="20" patternUnits="userSpaceOnUse">
          <Rect width="20" height="20" fill="url(#square)" strokeWidth="1" stroke="#eee" />
        </Pattern>

        <Path id="wave"
          fill="none" fillRule="evenodd" strokeWidth="2" strokeLinecap="butt" strokeLinejoin='miter' strokeMiterlimit="4" strokeDasharray='none' strokeOpacity="1"
          d={_data}
        />
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="100%" stopColor="white" />
          <Stop offset="90%"  stopColor="black" />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#quad)" stroke="#eee"
        strokeWidth="1" />
      <Use stroke="#000" translateY={0}  translateX={this.props.title?50:0}xlinkHref="#wave"
            scaleY={0.5} scaleX={0.5}

      />
      {this.props.title&&<SVGText  x="10" y="70" strokeWidth="1" stroke="black">{this.props.title}</SVGText>}
     
      <AnimatePath
        stroke='url(#gradient)'
        strokeWidth={"2"}
        ref={(path) => (this._path = path)}
        translateX={this.props.title?50:0}
        scaleY={0.5} scaleX={0.5}

        d={`M0,${140}
          ${ECG_PATH.slice(0, 1)[0].join("")}  `}
      />
    </Svg>
    );
  }
}
