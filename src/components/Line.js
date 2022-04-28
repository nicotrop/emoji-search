const Line = (props) => {
  const { index, emoji } = props;
  return (
    <>
      <div
        className="emoji-list"
        key={index}
        onClick={() => {
          navigator.clipboard.writeText(emoji.symbol);
        }}
      >
        <div className="left-col">
          <span>{emoji.symbol}</span>
          <span>{emoji.title}</span>
        </div>
        <span className="hide">Click to copy 📋 </span>
      </div>
    </>
  );
};

export default Line;
