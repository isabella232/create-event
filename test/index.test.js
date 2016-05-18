'use strict';

var assert = require('proclaim');
var create = require('../lib');

describe('create-event', function() {
  describe('click', function() {
    it('should have the right defaults', function() {
      var e = create('click');
      assert.strictEqual(e.bubbles, true);
      assert.strictEqual(e.cancelable, true);
      assert.strictEqual(e.view, window);
      assert.strictEqual(e.detail, 1);
      assert.strictEqual(e.screenX, 0);
      assert.strictEqual(e.screenY, 0);
      assert.strictEqual(e.clientX, 0);
      assert.strictEqual(e.clientY, 0);
      assert.strictEqual(e.ctrlKey, false);
      assert.strictEqual(e.altKey, false);
      assert.strictEqual(e.shiftKey, false);
      assert.strictEqual(e.metaKey, false);
      assert.strictEqual(e.button, 0);
    });

    it('should be able to set options', function() {
      var e = create('click', {
        bubbles: false,
        cancelable: false,
        screenX: 1,
        screenY: 2,
        clientX: 3,
        clientY: 4,
        ctrl: true,
        alt: true,
        shift: true,
        meta: true,
        button: 2
      });
      assert.strictEqual(e.bubbles, false);
      assert.strictEqual(e.cancelable, false);
      assert.strictEqual(e.view, window);
      assert.strictEqual(e.detail, 1);
      assert.strictEqual(e.screenX, 1);
      assert.strictEqual(e.screenY, 2);
      assert.strictEqual(e.clientX, 3);
      assert.strictEqual(e.clientY, 4);
      assert.strictEqual(e.ctrlKey, true);
      assert.strictEqual(e.altKey, true);
      assert.strictEqual(e.shiftKey, true);
      assert.strictEqual(e.metaKey, true);
      assert.strictEqual(e.button, 2);
    });
  });

  describe('dblclick', function() {
    it('should have the right defaults', function() {
      var e = create('dblclick');
      assert.strictEqual(e.bubbles, true);
      assert.strictEqual(e.cancelable, true);
      assert.strictEqual(e.view, window);
      assert.strictEqual(e.detail, 2);
      assert.strictEqual(e.screenX, 0);
      assert.strictEqual(e.screenY, 0);
      assert.strictEqual(e.clientX, 0);
      assert.strictEqual(e.clientY, 0);
      assert.strictEqual(e.ctrlKey, false);
      assert.strictEqual(e.altKey, false);
      assert.strictEqual(e.shiftKey, false);
      assert.strictEqual(e.metaKey, false);
      assert.strictEqual(e.button, 0);
    });

    it('should be able to set options', function() {
      var e = create('dblclick', {
        bubbles: false,
        cancelable: false,
        screenX: 1,
        screenY: 2,
        clientX: 3,
        clientY: 4,
        ctrl: true,
        alt: true,
        shift: true,
        meta: true,
        button: 2
      });
      assert.strictEqual(e.bubbles, false);
      assert.strictEqual(e.cancelable, false);
      assert.strictEqual(e.view, window);
      assert.strictEqual(e.detail, 2);
      assert.strictEqual(e.screenX, 1);
      assert.strictEqual(e.screenY, 2);
      assert.strictEqual(e.clientX, 3);
      assert.strictEqual(e.clientY, 4);
      assert.strictEqual(e.ctrlKey, true);
      assert.strictEqual(e.altKey, true);
      assert.strictEqual(e.shiftKey, true);
      assert.strictEqual(e.metaKey, true);
      assert.strictEqual(e.button, 2);
    });
  });

  describe('keydown', function() {
    it('should have the right defaults', function() {
      var e = create('keydown');
      assert.strictEqual(e.bubbles, true);
      assert.strictEqual(e.cancelable, true);
      assert.strictEqual(e.view, window);
      assert.strictEqual(e.ctrlKey, false);
      assert.strictEqual(e.altKey, false);
      assert.strictEqual(e.shiftKey, false);
      assert.strictEqual(e.metaKey, false);
      assert.strictEqual(e.keyCode, 0);
      assert.strictEqual(e.charCode, 0);
    });

    it('should be able to set options', function() {
      var e = create('keydown', {
        bubbles: false,
        cancelable: false,
        ctrl: true,
        alt: true,
        shift: true,
        meta: true,
        key: 42
      });
      assert.strictEqual(e.bubbles, false);
      assert.strictEqual(e.cancelable, false);
      assert.strictEqual(e.view, window);
      assert.strictEqual(e.ctrlKey, true);
      assert.strictEqual(e.altKey, true);
      assert.strictEqual(e.shiftKey, true);
      assert.strictEqual(e.metaKey, true);
      assert.strictEqual(e.keyCode, 42);
      assert.strictEqual(e.charCode, 42);
    });

    it('should be able to pass a string keyname', function() {
      var e = create('keydown', { key: 'enter' });
      assert.strictEqual(e.keyCode, 13);
    });

    it('should support `shift: false`', function() {
      var e = create('keydown', { key: 'tab', shift: false });
      assert(!e.shiftKey);
    });
  });

  describe('keyup', function() {
    it('should have the right defaults', function() {
      var e = create('keyup');
      assert.strictEqual(e.bubbles, true);
      assert.strictEqual(e.cancelable, true);
      assert.strictEqual(e.view, window);
      assert.strictEqual(e.ctrlKey, false);
      assert.strictEqual(e.altKey, false);
      assert.strictEqual(e.shiftKey, false);
      assert.strictEqual(e.metaKey, false);
      assert.strictEqual(e.keyCode, 0);
      assert.strictEqual(e.charCode, 0);
    });

    it('should be able to set options', function() {
      var e = create('keyup', {
        bubbles: false,
        cancelable: false,
        ctrl: true,
        alt: true,
        shift: true,
        meta: true,
        key: 42
      });
      assert.strictEqual(e.bubbles, false);
      assert.strictEqual(e.cancelable, false);
      assert.strictEqual(e.view, window);
      console.log(e);
      assert.strictEqual(e.ctrlKey, true);
      assert.strictEqual(e.altKey, true);
      assert.strictEqual(e.shiftKey, true);
      assert.strictEqual(e.metaKey, true);
      assert.strictEqual(e.keyCode, 42);
      assert.strictEqual(e.charCode, 42);
    });

    it('should be able to pass a string keyname', function() {
      var e = create('keyup', { key: 'enter' });
      assert.strictEqual(e.keyCode, 13);
    });
  });
});
