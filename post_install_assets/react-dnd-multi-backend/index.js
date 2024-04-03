export * from 'dnd-multi-backend';
import i, { useState as l, createContext as D } from 'react';
import { DndProvider as m } from 'react-dnd';
import { MultiBackend as P } from 'dnd-multi-backend';

var u = D(null),
  g = ({
    portal: e,
    ...t
  }) => {
    let [r, o] = l(null);
    let value = e ? e : r; // TODO : remove ?? operator
    return i.createElement(u.Provider, { value: value}, i.createElement(m, { backend: P, ...t }), e ? null : i.createElement('div', { ref: o }));
  };
import w, { useContext as k } from 'react';
import { createPortal as M } from 'react-dom';
import { Preview as C, Context as b } from 'react-dnd-preview';
import { useState as v, useEffect as S, useContext as x } from 'react';
import { DndContext as f } from 'react-dnd';

var p = () => {
  let [e, t] = v(!1),
    r = x(f);
  return S(() => {
    let o = r && r.dragDropManager && r.dragDropManager.getBackend(),
    // TODO let o = r?.dragDropManager?.getBackend(),
      n = {
        backendChanged: s => {
          t(s.previewEnabled());
        }
      };
    return t(o.previewEnabled()), o.previewsList()
      .register(n), () => {
      o.previewsList()
        .unregister(n);
    };
  }, [r, r.dragDropManager]), e;
};
var E = e => {
  let t = p(),
    r = k(u);
  if (!t) return null;
  let o = w.createElement(C, { ...e });
  return r !== null ? M(o, r) : o;
};
E.Context = b;
import { useDrag as T } from 'react-dnd';
import { useContext as B } from 'react';
import { DndContext as y } from 'react-dnd';

var R = (e, t, r, o) => {
    let n = r.getBackend();
    r.receiveBackend(o);
    let s = t(e);
    return r.receiveBackend(n), s;
  },
  a = (e, t) => {
    let r = B(y),
      o = r && r.dragDropManager && r.dragDropManager.getBackend();
    if (o === void 0) throw new Error('could not find backend, make sure you are using a <DndProvider />');
    let n = t(e),
      s = {},
      d = o.backendsList();
    for (let c of d) s[c.id] = R(e, t, r.dragDropManager, c.instance);
    return [n, s];
  };
var pe = e => a(e, T);
import { useDrop as O } from 'react-dnd';

var le = e => a(e, O);
import { usePreview as h } from 'react-dnd-preview';

var Se = () => {
  let e = p(),
    t = h();
  return e ? t : { display: !1 };
};
export {
  g as DndProvider,
  E as Preview,
  b as PreviewContext,
  pe as useMultiDrag,
  le as useMultiDrop,
  Se as usePreview
};

