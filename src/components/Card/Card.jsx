import "./Card.css"

function Card(props) {
    // 상위 jsx 에서 해당 jsx 를 import해 사용시 따로 설정해준 className과 함깨 쓰고싶을떄
    // props로 클래스 이름을 들고올 수 있음
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
    
}

export default Card;