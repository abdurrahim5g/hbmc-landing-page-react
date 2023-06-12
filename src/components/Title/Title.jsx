import "./Title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ subtitle, children, align }) => {
  return (
    <h2
      className="site-title text-2xl lg:text-3xl font-semibold"
      style={{ textAlign: align ? align : "center " }}
    >
      {subtitle ? subtitle : "Our"}
      <span> {children}</span>
    </h2>
  );
};

export default Title;
