const Button = (props) => {
  const { name, style } = props;
  //  Write your code here.
  return <button className={style}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button name="Like" style="likeBtn" />
      <Button name="Comment" style="commentBtn" />
      <Button name="Share" style="shareBtn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
