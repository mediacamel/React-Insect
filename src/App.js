import React, { Component } from 'react';

require('./scss/main.scss');

export class App extends Component {
  render() {
    return (
      <div className="wrap">
        <header>
          <div className="logo">
            <img src="http://www.insect-expo.co.kr/images/logo.jpg" />
          </div>
          <nav>
            <ul>
              <li>예천세계곤충엑스포</li>
              <li>예천세계곤충엑스포</li>
              <li>예천세계곤충엑스포</li>
              <li>예천세계곤충엑스포</li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <h1>곤충의 꿈 이야기</h1>
          <div className="sub">hi</div>
        </div>
        <footer>
          <div className="logo">
            <img src="http://www.insect-expo.co.kr/images/logo.jpg" />
          </div>
          <p>36819 경상북도 예천군 예천읍 충효로 395 공설운동장 대표전화 : 054-650-6038, 팩스 : 054-650-6039
저작권 © 모든 권리 보유. 관리자메일
본 홈페이지에 게시된 이메일주소가 자동 수집을 거부하며, 이를 위반시 정보통신망법에 의해 처벌됨을 유념하시기 바랍니다</p>
        </footer>
      </div>
    );
  }
}