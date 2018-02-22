// @flow
import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Mute from '../src/mute';

configure({ adapter: new Adapter() });

test('not throw is empty children', t=> {
  t.notThrows(() => shallow(<Mute />));
});

test('basic usage', t => {
  const mute = shallow(<Mute>{'There is a ahole in this sentence'}</Mute>);
  t.is(mute.text(), 'There is a ***** in this sentence');
});

test('with add words prop', t => {
  const mute = shallow(<Mute addWords={["bad"]} >{'Muting a bad word'}</Mute>);
  t.is(mute.text(), 'Muting a *** word');
});

test('with add words prop', t => {
  const mute = shallow(<Mute removeWords={['ahole']} >{'ahole should stay in this sentence'}</Mute>);
  t.is(mute.text(), 'ahole should stay in this sentence');
});

test('with some different safeText', t => {
  const mute = shallow(<Mute safeText="#">{'There is a ahole in this sentence'}</Mute>);
  t.is(mute.text(), 'There is a ##### in this sentence');
});
