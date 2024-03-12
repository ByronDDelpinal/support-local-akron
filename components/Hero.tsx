import Image from 'next/image';
import heroBg from '../public/images/northside-akron.jpg';

export function Hero() {
  return (
    <div id="#top" className="cover animated">
      <Image
        title="Cover image"
        alt="Air Balloon in Nature"
        src={heroBg}
        style={{
          position: 'relative',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <div className="overlay">
        <div className="center">
          <h1 className="name">
            <b>SUPPORT LOCAL AKRON</b>
          </h1>
          <h5 className="greetings">
            Show your love to our amazing local artists, musicians, and
            businesses
          </h5>
        </div>
      </div>
    </div>
  );
}
