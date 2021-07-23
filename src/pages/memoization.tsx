import memoize from "memoize-one";
import { Component ,Fragment} from 'react'

class Example extends Component {
    // state 只需要保存当前的 filter 值：
    state = { filterText: "" };

    // 在 list 或者 filter 变化时，重新运行 filter：
    // 针对大量数据 缓存最后一次；像极了computed；
    filter = memoize(
        (list, filterText) => list.filter(item => item.text.includes(filterText))
    );

    handleChange = event => {
        this.setState({ filterText: event.target.value });
    };

    render() {
        // 计算最新的过滤后的 list。
        // 如果和上次 render 参数一样，`memoize-one` 会重复使用上一次的值。
        const filteredList = this.filter(this.props.list, this.state.filterText);

        return (
            <Fragment>
                <input onChange={this.handleChange} value={this.state.filterText} />
                <ul>{filteredList.map(item => <li key={item.id}>{item.text}</li>)}</ul>
            </Fragment>
        );
    }
}
export default Example
