// @flow

import { windowsStore } from 'process';
import * as React from 'react';
import { Modal } from 'react-bootstrap';

import { Page, Card, Grid, Form, Button, Dropdown } from 'tabler-react';

import SiteWrapper from './SiteWrapper.react';

function ProcCtrlTest1() {
  return (
    <SiteWrapper>
      <Page.Card
        title="Form elements"
        RootComponent={Form}
        footer={
          <Card.Footer>
            <div className="d-flex">
              <Button link>Cancel</Button>
              <Button type="submit" color="primary" className="ml-auto">
                Send data
              </Button>
            </div>
          </Card.Footer>
        }
      >
        <Grid.Row>
          <Grid.Col lg={4}>
            <Card title="Input Mask">
              <Card.Body>
                <Form.Group label="Date">
                  <Form.MaskedInput
                    placeholder="00/00/0000"
                    mask={[
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                  />
                </Form.Group>
                <Form.Group label="Time">
                  <Form.MaskedInput
                    placeholder="00:00:00"
                    mask={[/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]}
                  />
                </Form.Group>
                <Form.Group label="Date & Time">
                  <Form.MaskedInput
                    placeholder="00/00/0000 00:00:00"
                    mask={[
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      ' ',
                      /\d/,
                      /\d/,
                      ':',
                      /\d/,
                      /\d/,
                      ':',
                      /\d/,
                      /\d/,
                    ]}
                  />
                </Form.Group>
                <Form.Group label="Zipcode">
                  <Form.MaskedInput
                    placeholder="91210"
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
                  />
                </Form.Group>
                <Form.Group label="Telephone">
                  <Form.MaskedInput
                    placeholder="+1 (555) 495-3947"
                    mask={[
                      '(',
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                  />
                </Form.Group>
                <Form.Group label="Telephone with Area Code">
                  <Form.MaskedInput
                    placeholder="+1 (555) 495-3947"
                    mask={[
                      '+',
                      '1',
                      ' ',
                      '(',
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                  />
                </Form.Group>
                <Form.Group label="IP Address">
                  <Form.MaskedInput
                    placeholder="127.0.0.1"
                    mask={[
                      /\d/,
                      /\d/,
                      /\d/,
                      '.',
                      /\d/,
                      /\d/,
                      /\d/,
                      '.',
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Card title="Radio Button">
              <Card.Body>
                <Form.Radio
                  className="radio"
                  name="test"
                  label="hi"
                  value="1"
                ></Form.Radio>
              </Card.Body>
            </Card>
            <Button.List>
              <Button color="blue">Blue</Button>
              <Button color="azure">Azure</Button>
              <Button color="indigo">Indigo</Button>
              <Button color="purple">Purple</Button>
              <Button color="pink">Pink</Button>
              <Button color="red" onClick={() => (location.href = '/')}>
                Red
              </Button>
              <Button color="orange" onClick={() => console.log('hi')}>
                Orange
              </Button>
              <Button color="yellow">Yellow</Button>
              <Button color="lime">Lime</Button>
              <Button color="green">Green</Button>
              <Button color="teal">Teal</Button>
              <Button color="cyan">Cyan</Button>
              <Button color="gray">Gray</Button>
              <Button color="gray-dark">Dark gray</Button>
            </Button.List>
          </Grid.Col>
          <Grid.Col md={6} lg={4}></Grid.Col>
        </Grid.Row>
      </Page.Card>
    </SiteWrapper>
  );
}

export default ProcCtrlTest1;
