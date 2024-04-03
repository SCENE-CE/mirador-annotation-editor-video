var D = (r, n, e) => {
  if (!n.has(r)) throw TypeError('Cannot ' + e);
};
var t = (r, n, e) => (D(r, n, 'read from private field'), e ? e.call(r) : n.get(r)),
  o = (r, n, e) => {
    if (n.has(r)) throw TypeError('Cannot add the same private member more than once');
    n instanceof WeakSet ? n.add(r) : n.set(r, e);
  },
  p = (r, n, e, i) => (D(r, n, 'write to private field'), i ? i.call(r, e) : n.set(r, e), e);
var w,
  b = class {
    constructor() {
      o(this, w, void 0);
      this.register = n => {
        t(this, w)
          .push(n);
      };
      this.unregister = n => {
        let e;
        for (; (e = t(this, w)
          .indexOf(n)) !== -1;) {
          t(this, w)
            .splice(e, 1);
        }
      };
      this.backendChanged = n => {
        for (let e of t(this, w)) e.backendChanged(n);
      };
      p(this, w, []);
    }
  };
w = new WeakMap;
var a,
  f,
  c,
  d,
  h,
  x,
  T,
  E,
  v,
  y,
  g,
  l = class l {
    constructor(n, e, i) {
      o(this, a, void 0);
      o(this, f, void 0);
      o(this, c, void 0);
      o(this, d, void 0);
      o(this, h, void 0);
      o(this, x, (n, e, i) => {
        if (!i.backend) throw new Error(`You must specify a 'backend' property in your Backend entry: ${JSON.stringify(i)}`);
        let u = i.backend(n, e, i.options),
          s = i.id,
          k = !i.id && u && u.constructor;
        if (k && (s = u.constructor.name), s) {
          k && console.warn(`Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.
        This might be unsupported in the future, please specify 'id' explicitely for every backend.`);
        } else {
          throw new Error(`You must specify an 'id' property in your Backend entry: ${JSON.stringify(i)}
        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx`);
        }
        if (t(this, c)[s]) {
          throw new Error(`You must specify a unique 'id' property in your Backend entry:
        ${JSON.stringify(i)} (conflicts with: ${JSON.stringify(t(this, c)[s])})`);
        }
        return {
          id: s,
          instance: u,
          preview: i.preview ? i.preview : !1,
          transition: i.transition,
          skipDispatchOnTransition: i.skipDispatchOnTransition ? i.skipDispatchOnTransition : !1
        };
      });
      this.setup = () => {
        if (!(typeof window > 'u')) {
          if (l.isSetUp) throw new Error('Cannot have two MultiBackends at the same time.');
          l.isSetUp = !0, t(this, T)
            .call(this, window), t(this, c)[t(this, a)].instance.setup();
        }
      };
      this.teardown = () => {
        typeof window > 'u' || (l.isSetUp = !1, t(this, E)
          .call(this, window), t(this, c)[t(this, a)].instance.teardown());
      };
      this.connectDragSource = (n, e, i) => t(this, g)
        .call(this, 'connectDragSource', n, e, i);
      this.connectDragPreview = (n, e, i) => t(this, g)
        .call(this, 'connectDragPreview', n, e, i);
      this.connectDropTarget = (n, e, i) => t(this, g)
        .call(this, 'connectDropTarget', n, e, i);
      this.profile = () => t(this, c)[t(this, a)].instance.profile();
      this.previewEnabled = () => t(this, c)[t(this, a)].preview;
      this.previewsList = () => t(this, f);
      this.backendsList = () => t(this, d);
      o(this, T, n => {
        t(this, d)
          .forEach(e => {
            e.transition && n.addEventListener(e.transition.event, t(this, v));
          });
      });
      o(this, E, n => {
        t(this, d)
          .forEach(e => {
            e.transition && n.removeEventListener(e.transition.event, t(this, v));
          });
      });
      o(this, v, n => {
        let e = t(this, a);
        if (t(this, d)
          .some(i => i.id !== t(this, a) && i.transition && i.transition.check(n) ? (p(this, a, i.id), !0) : !1), t(this, a) !== e) {
          t(this, c)[e].instance.teardown(), Object.keys(t(this, h))
            .forEach(k => {
              let B = t(this, h)[k];
              B.unsubscribe(), B.unsubscribe = t(this, y)
                .call(this, B.func, ...B.args);
            }), t(this, f)
            .backendChanged(this);
          let i = t(this, c)[t(this, a)];
          if (i.instance.setup(), i.skipDispatchOnTransition) return;
          let u = n.constructor,
            s = new u(n.type, n);
          n.target && n.target.dispatchEvent(s);
        }
      });
      o(this, y, (n, e, i, u) => t(this, c)[t(this, a)].instance[n](e, i, u));
      o(this, g, (n, e, i, u) => {
        let s = `${n}_${e}`,
          k = t(this, y)
            .call(this, n, e, i, u);
        return t(this, h)[s] = {
          func: n,
          args: [e, i, u],
          unsubscribe: k
        }, () => {
          t(this, h)[s].unsubscribe(), delete t(this, h)[s];
        };
      });
      if (!i || !i.backends || i.backends.length < 1) {
        throw new Error(`You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)
        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx`);
      }
      p(this, f, new b), p(this, c, {}), p(this, d, []), i.backends.forEach(u => {
        let s = t(this, x)
          .call(this, n, e, u);
        t(this, c)[s.id] = s, t(this, d)
          .push(s);
      }), p(this, a, t(this, d)[0].id), p(this, h, {});
    }
  };
a = new WeakMap, f = new WeakMap, c = new WeakMap, d = new WeakMap, h = new WeakMap, x = new WeakMap, T = new WeakMap, E = new WeakMap, v = new WeakMap, y = new WeakMap, g = new WeakMap, l.isSetUp = !1;
var M = l;
var P = (r, n, e) => new M(r, n, e);
var m = (r, n) => ({
  event: r,
  check: n
});
var S = m('touchstart', r => {
    let n = r;
    return n.touches !== null && n.touches !== void 0;
  }),
  L = m('dragstart', r => r.type.indexOf('drag') !== -1 || r.type.indexOf('drop') !== -1),
  O = m('mousedown', r => r.type.indexOf('touch') === -1 && r.type.indexOf('mouse') !== -1),
  C = m('pointerdown', r => r.pointerType == 'mouse');
export {
  L as HTML5DragTransition,
  O as MouseTransition,
  P as MultiBackend,
  C as PointerTransition,
  S as TouchTransition,
  m as createTransition
};

