import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Hi, my name is Daniel",
          1500,
          "I am a Software Developer" ,
          3000
        ]}
        speed={25}
        repeat={Infinity}
        style={{ fontSize: '5em', color: 'white', zIndex: 1, position: 'relative', 
      margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh'}}
      />
    </div>
  );
};

export default Typewriter;