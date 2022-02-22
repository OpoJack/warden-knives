import React from "react";
import "./scroll-fade.styles.scss";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    //Created safeDomRef to catch domRef at the time of rendering
    //Avoids error when domRef is not available
    const safeDomRef = domRef.current;

    observer.observe(safeDomRef);
    return () => observer.unobserve(safeDomRef);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
