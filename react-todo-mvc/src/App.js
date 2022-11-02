import { Input, Table, Space, Popconfirm } from 'antd'
import axios from 'axios'
import React from 'react'
import './App.css'

const { Search } = Input

class App extends React.Component {
  state = {
    list: [],
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (_, record) =>
          this.state.list.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ]
  }

  // 搜索
  onSearch = async (val) => {
    const data = await axios.get('http://localhost:3001/data/?q=' + val)
    console.log(data)
    this.setState({
      list: data.data
    })
  }
  // 删除
  handleDelete = async (val) => {
    await axios.delete('http://localhost:3001/data/' + val)
    this.loadList()
  }
  // 加载列表
  loadList = async () => {
    const res = await axios.get('http://localhost:3001/data')
    this.setState({
      list: res.data
    })
  }

  componentDidMount () {
    this.loadList()
  }

  render () {
    return (
      <div className="container">
        <div className="search-box">
          <Search
            placeholder="请输入关键词"
            allowClear
            enterButton="搜索"
            size="large"
            onChange={this.inputChange}
            value={this.state.keyword}
            onSearch={this.onSearch}
          />
        </div>
        <Table dataSource={this.state.list} columns={this.state.columns} />
      </div>
    )
  }
}

export default App
