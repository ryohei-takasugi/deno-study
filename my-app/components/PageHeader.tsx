import { Component } from "preact";

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: Date.now() };
  }

  // ライフサイクルメソッド: コンポーネントがDOMにマウントされた時に実行
  componentDidMount() {
    // 1秒ごとに時刻を更新
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  // ライフサイクルメソッド: コンポーネントがDOMから削除される直前に実行
  componentWillUnmount() {
    // レンダリングが不可能なので停止
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString();
    return <span>{time}</span>;
  }
}
