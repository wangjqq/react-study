import './index.css'
import avatar from './images/avatar.png'
import React from 'react'
import { v4 as uuid } from 'uuid'

// 时间格式化
function formatDate (time) {
  return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`
}

class Demo extends React.Component {
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot'
      },
      {
        id: 2,
        name: '时间',
        type: 'time'
      }
    ],
    active: 'hot',
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-10-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1
      }
    ],
    newList: {
      id: '',
      author: '',
      comment: '',
      time: '',
      attitude: ''
    }
  }
  changeOn = (type) => {
    this.setState({
      active: type
    })
    // console.log(e)
  }
  changeText = (e) => {
    this.setState({
      newList: {
        ...this.state.newList,
        comment: e.target.value
      }
    })
  }
  addList = () => {
    // this.setState({
    //   newList: {
    //     ...this.state.newList,
    //     id: this.state.list[this.state.list.length - 1] + 1,
    //     author: uuid(),
    //     time: new Date('2021-10-11 10:09:00'),
    //     attitude: 0
    //   },
    // })
    // console.log(this.state.newList)
    this.setState({
      list: [
        ...this.state.list,
        {
          id: uuid(),
          author: uuid(),
          time: new Date,
          attitude: 0,
          comment: this.state.newList.comment
        }
      ]
    })
  }
  del = (id) => {
    console.log(id)
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  changeLike = (item) => {
    const { attitude, id } = item
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            attitude: item.attitude === 1 ? 0 : 1
          }
        }
        return item
      })
    })
  }
  render () {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>5 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {
                this.state.tabs.map(tab => (
                  <li
                    onClick={() => this.changeOn(tab.type)}
                    key={tab.id}
                    className={tab.type === this.state.active ? 'on' : ''}
                  >按{tab.name}排序</li>
                ))
              }
            </ul>
          </div>

          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              <textarea
                cols="80"
                rows="5"
                placeholder="发条友善的评论"
                className="ipt-txt"
                value={this.state.newList.comment}
                onChange={this.changeText}
              />
              <button className="comment-submit" onClick={this.addList}>发表评论</button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {
              this.state.list.map(item => (
                <div className="list-item" key={item.id}>
                  <div className="user-face">
                    <img className="user-head" src={avatar} alt="" />
                  </div>
                  <div className="comment">
                    <div className="user">{item.author}</div>
                    <p className="text">{item.comment}</p>
                    <div className="info">
                      <span className="time">{formatDate(item.time)}</span>
                      <span className={item.attitude === 1 ? 'like liked' : 'like'} onClick={() => this.changeLike(item)}>
                        <i className="icon" />
                      </span>
                      <span className={item.attitude === -1 ? 'hate hated' : 'hate'}>
                        <i className="icon" />
                      </span>
                      <span className="reply btn-hover" onClick={() => this.del(item.id)}>删除</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>)
  }
}


function App () {
  return (
    <div className="App">
      <Demo></Demo>
    </div>
  )
}

export default App
