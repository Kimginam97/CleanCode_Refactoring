// case 1: this JSX
ReactDOM.render(
    <div id="msg">Hello World!</div>,
    mountNode
);

// Is transformed to this JS:
ReactDOM.render(React.createElement('div', { id: 'msg' }, 'Hello World!'), mountNode);


// --------------------------------------------------------------------------------

// case 2: this JSX
/* <div id = {if (condition) {'msg'}}>Hello World!</div> */

// Is transformed to this JS:
// React.createElement("div", { id: if(condition) { 'msg' } }, "Hello World!");

// object id 값이 삼항연산자를 통해서 값이 들어간다
// ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode);

// object id 값이 if로 들어갈수 없다, for문 (x)
// const obj = {id: if (condition) {'msg'}}


// --------------------------------------------------------------------------------

// case 3
function ReactComponent() {
    return (
        <section>
            <h1>Color</h1>
            <h3>Name</h3>
            <p>{this.state.color || 'whilte'}</p>
            <h3>Hex</h3>

            <p>
                {(() => {
                    switch (this.state.color) {
                        case 'red':
                            return '#FF0000';
                        case 'green':
                            return '#00FF00';
                        case 'blue':
                            return '#0000FF';
                        default:
                            return '#FFFFFF';
                    }
                })}
            </p>
        </section>
    );
};

// --------------------------------------------------------------------------------

// case 4
function ReactComponent() {
    return (
        <tbody>
            {(() => {
                const rows = [];
                for (let i = 0; i < objectRows.length; i++) {
                    rows.push(<ObjectRow key={i} data={objectRows[i]} />);
                }
                return rows;
            })()}

            // 리팩토링
            {   // map을 이용해서 계속 리턴된 값을 받아온다
                objectRows.map((obj,i) => (
                    <ObjectRow key={i} data={objectRows[obj]} />
                ))
            } //값과 식이 들어가야함
        </tbody>
    );
};

// --------------------------------------------------------------------------------

// case 5
function ReactComponent() {
    return (
        <div>
            {(() => {
                if (conditionOne) return <span>One</span>;
                if (conditionOne) return <span>Two</span>;
                else conditionOne;
                return <span>Three</span>;
            })}

            // 리팩토링
            {conditionOne && <span>One</span>}
            {conditionOne && <span>Two</span>}
            {!conditionOne && <span>Three</span>}
        </div>
    )
}