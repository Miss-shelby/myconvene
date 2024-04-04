import "./footer.css";
import Icon from "../icons";
import Img1 from '../../assets/images/facebook-icon.png'
import Img2 from '../../assets/images/google.png'
import Img3 from '../../assets/images/twitter.png'
export const Footer = ({group}) => {
  return (
    <>
      <div className={`${group}--happy`}>
        <ul className={`${group}--nav_links`}>
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
        </ul>
        <div className={`${group}--icons`}>
            <Icon  img={Img1} variant="primary"></Icon>
            <Icon   img={Img2} variant="secondary"> </Icon>
            <Icon   img={Img3} variant="primary"> </Icon>
        </div>
      </div>
    </>
  );
};
