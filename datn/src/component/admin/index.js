import React from 'react';
import { Row, Col } from 'antd';
import { Outlet } from 'react-router-dom';
import SidebarAdmin from './Sidebar';

export default function   Admin() {
  return (
    <div>

      <Row>
        <Col span={4}>
          <SidebarAdmin />
        </Col>
        <Col span={1}>
        </Col>
        <Col span={18}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}