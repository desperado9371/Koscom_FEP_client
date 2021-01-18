// @flow

import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from 'tabler-react';

const navBarItems: Array<navItem> = [
  {
    value: 'Home',
    to: '#',
    icon: 'home',
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: 'Interface',
    icon: 'box',
    subItems: [
      {
        value: 'Cards Design',
        to: '/cards',
        LinkComponent: withRouter(NavLink),
      },
      { value: 'Charts', to: '/charts', LinkComponent: withRouter(NavLink) },
      {
        value: 'Pricing Cards',
        to: '/pricing-cards',
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
  {
    value: 'Components',
    icon: 'calendar',
    subItems: [
      { value: 'Maps', to: '/maps', LinkComponent: withRouter(NavLink) },
      { value: 'Icons', to: '/icons', LinkComponent: withRouter(NavLink) },
      { value: 'Store', to: '/store', LinkComponent: withRouter(NavLink) },
      { value: 'Blog', to: '/blog', LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: 'Pages',
    icon: 'file',
    subItems: [
      { value: 'Profile', to: '/profile', LinkComponent: withRouter(NavLink) },
      { value: 'Login', to: '/login', LinkComponent: withRouter(NavLink) },
      {
        value: 'Register',
        to: '/register',
        LinkComponent: withRouter(NavLink),
      },
      {
        value: 'Forgot password',
        to: '/forgot-password',
        LinkComponent: withRouter(NavLink),
      },
      { value: '400 error', to: '/400', LinkComponent: withRouter(NavLink) },
      { value: '401 error', to: '/401', LinkComponent: withRouter(NavLink) },
      { value: '403 error', to: '/403', LinkComponent: withRouter(NavLink) },
      { value: '404 error', to: '/404', LinkComponent: withRouter(NavLink) },
      { value: '500 error', to: '/500', LinkComponent: withRouter(NavLink) },
      { value: '503 error', to: '/503', LinkComponent: withRouter(NavLink) },
      { value: 'Email', to: '/email', LinkComponent: withRouter(NavLink) },
      {
        value: 'Empty page',
        to: '/empty-page',
        LinkComponent: withRouter(NavLink),
      },
      { value: 'RTL', to: '/rtl', LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: 'Forms',
    to: '/form-elements',
    icon: 'check-square',
    LinkComponent: withRouter(NavLink),
  },
  {
    value: 'Gallery',
    to: '/gallery',
    icon: 'image',
    LinkComponent: withRouter(NavLink),
  },
  {
    icon: 'file-text',
    value: 'Documentation',
    to:
      process.env.NODE_ENV === 'production'
        ? 'https://tabler.github.io/tabler-react/documentation'
        : '/documentation',
  },
];

class SiteWrapper extends React.Component<Props, State> {
  state = {};

  render(): React.Node {
    return (
      <Site.Wrapper
        headerProps={{
          href: '#/',
          alt: 'FEP Monitoring Client',
          imageURL: './img/koscom_ci.jpg',
          navItems: <h3>FEP Moniotring Client</h3>,
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          links: [
            <a href="#">First Link</a>,
            <a href="#">Second Link</a>,
            <a href="#">Third Link</a>,
            <a href="#">Fourth Link</a>,
            <a href="#">Five Link</a>,
            <a href="#">Sixth Link</a>,
            <a href="#">Seventh Link</a>,
            <a href="#">Eigth Link</a>,
          ],
          note:
            'Premium and Open Source dashboard template with responsive and high quality UI. For Free!',
          copyright: (
            <React.Fragment>
              Copyright © 2019
              <a href="."> Tabler-react</a>. Theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                codecalm.net
              </a>{' '}
              All rights reserved.
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}></Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
